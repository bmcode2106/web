interface MovieEmbedPageProps {
      params: {
          tmdbId: string;
            };
            }

            export default function MovieEmbedPage({ params }: MovieEmbedPageProps) {
              // 1. Validasi dasar untuk parameter
                const tmdbId = params.tmdbId || '597'; // Fallback ke default jika tidak ada

                  // 2. Konstruksi URL upstream ke VidPlus
                    const upstreamUrl = `https://player.vidplus.to/embed/movie/${tmdbId}`;

                      // 3. Render iframe yang mengisi seluruh viewport
                        return (
                            <iframe
                                  src={upstreamUrl}
                                        title="KlikPlay Movie Player"
                                              style={{
                                                      position: 'absolute',
                                                              top: 0,
                                                                      left: 0,
                                                                              width: '100%',
                                                                                      height: '100%',
                                                                                              border: 'none',
                                                                                                    }}
                                                                                                          allowFullScreen
                                                                                                                allow="autoplay; encrypted-media"
                                                                                                                    />
                                                                                                                      );
                                                                                                                      }
