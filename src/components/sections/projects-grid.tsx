"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  Calendar,
  AlertCircle,
  Search,
  X
} from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination';

interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

export function ProjectsGrid() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [allTopics, setAllTopics] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [showTags, setShowTags] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Projeler yüklenirken bir hata oluştu');
        }
        const data = await response.json();
        setProjects(data);
        const topicsSet = new Set<string>();
        data.forEach((project: GitHubRepo) => {
          project.topics.forEach(topic => topicsSet.add(topic));
        });
        setAllTopics(Array.from(topicsSet).sort());
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Bir şeyler ters gitti');
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const displayedProjects = projects;
  const totalPages = Math.ceil(displayedProjects.length / pageSize);
  const paginatedProjects = displayedProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  if (loading) {
    return (
      <div className="mb-6">
        <div className="relative max-w-md mx-auto mb-2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2" />
          <Input placeholder="Projelerde ara..." disabled className="pl-10" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-[420px] bg-muted/20 animate-pulse rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
          <h3 className="text-lg font-semibold">Projeler yüklenemedi</h3>
          <p className="text-muted-foreground">{error}</p>
          <Button onClick={() => window.location.reload()} variant="outline">Tekrar Dene</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6">
        <div className="relative max-w-md mx-auto mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2" />
          <Input
            placeholder="Projelerde ara..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-10 bg-background/50 backdrop-blur-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 justify-start">
          <button
            className="px-4 py-2 rounded-full border text-xs font-medium transition-colors bg-primary text-primary-foreground"
            onClick={() => setShowTags((v) => !v)}
          >
            {showTags ? 'Etiketleri Gizle' : 'Etiketleri Göster'}
          </button>
          
          {(search || selectedTopic) && (
            <button
              className="px-4 py-2 rounded-full border text-xs font-medium bg-background hover:bg-muted transition-colors"
              onClick={() => { setSearch(''); setSelectedTopic(null); }}
            >
              Filtreleri Temizle
            </button>
          )}
        </div>

        {showTags && (
          <div className="flex flex-wrap items-center gap-2 mt-4">
            {allTopics.map((topic) => (
              <Button
                key={topic}
                variant={selectedTopic === topic ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedTopic(topic)}
                className="text-xs h-7"
              >
                {topic}
              </Button>
            ))}
          </div>
        )}

        {(search || selectedTopic) && (
          <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
            <span>Aktif filtreler:</span>
            {search && <Badge variant="secondary">Arama: {search}</Badge>}
            {selectedTopic && <Badge variant="secondary">Etiket: {selectedTopic}</Badge>}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="h-full flex flex-col"
          >
            <Card className="group h-full min-h-[420px] flex flex-col overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="relative h-32 w-full overflow-hidden">
                <Image
                  src={`https://opengraph.githubassets.com/1/${project.full_name}`}
                  alt={project.name}
                  width={400}
                  height={128}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>

              <CardHeader className="space-y-2 flex-1">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                    {project.name}
                  </CardTitle>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-3 w-3" />
                    <span>{project.stargazers_count}</span>
                  </div>
                </div>
                <CardDescription className="line-clamp-2">
                  {project.description || 'Açıklama bulunmuyor.'}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4 flex flex-col">
                <div className="flex flex-wrap gap-2">
                  {project.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-[10px]">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(project.updated_at)} güncellendi</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    <span>{project.forks_count}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <Button asChild size="sm" variant="outline" className="flex-1">
                    <Link href={project.html_url} target="_blank">
                      <Github className="h-3 w-3 mr-2" />
                      Kod
                    </Link>
                  </Button>
                  {project.homepage && (
                    <Button asChild size="sm" className="flex-1">
                      <Link href={project.homepage} target="_blank">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Canlı
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.max(1, p - 1)); }}
                className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.min(totalPages, p + 1)); }}
                className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return 'bugün';
  if (diffInDays === 1) return 'dün';
  if (diffInDays < 30) return `${diffInDays} gün önce`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} ay önce`;
  return `${Math.floor(diffInDays / 365)} yıl önce`;
}