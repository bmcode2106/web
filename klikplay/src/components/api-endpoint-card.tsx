"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ApiEndpointCardProps {
  title: string;
    description: React.ReactNode;
      urlFormat: string;
        exampleUrl: string;
        }

        // Komponen kecil untuk blok kode dengan tombol copy
        function CodeBlock({ content }: { content: string }) {
          const [isCopied, setIsCopied] = useState(false);

            const handleCopy = () => {
                navigator.clipboard.writeText(content);
                    setIsCopied(true);
                        setTimeout(() => setIsCopied(false), 2000);
                          };

                            return (
                                <div className="flex items-center justify-between gap-4 rounded-md border bg-muted p-3">
                                      <code className="truncate text-sm font-mono text-muted-foreground">
                                              {content}
                                                    </code>
                                                          <Button size="icon" variant="ghost" onClick={handleCopy} className="flex-shrink-0">
                                                                  {isCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                                                        </Button>
                                                                            </div>
                                                                              );
                                                                              }

                                                                              export function ApiEndpointCard({ title, description, urlFormat, exampleUrl }: ApiEndpointCardProps) {
                                                                                return (
                                                                                    <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
                                                                                          <div className="p-6">
                                                                                                  <h3 className="text-xl font-semibold">{title}</h3>
                                                                                                          <p className="mt-2 text-muted-foreground">{description}</p>
                                                                                                                </div>
                                                                                                                      <div className="space-y-4 border-t bg-muted/50 p-6">
                                                                                                                              <CodeBlock content={urlFormat} />
                                                                                                                                      <div>
                                                                                                                                                <p className="mb-2 text-sm font-medium">Example:</p>
                                                                                                                                                          <CodeBlock content={exampleUrl} />
                                                                                                                                                                  </div>
                                                                                                                                                                        </div>
                                                                                                                                                                            </div>
                                                                                                                                                                              );
                                                                                                                                                                              }