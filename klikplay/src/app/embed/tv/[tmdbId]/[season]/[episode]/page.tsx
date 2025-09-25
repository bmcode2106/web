interface SeriesEmbedPageProps {
      params: {
          tmdbId: string;
              season: string;
                  episode: string;
                    };
                    }

                    export default function SeriesEmbedPage({ params }: SeriesEmbedPageProps) {
                      // 1. Validasi dan fallback untuk semua parameter
                        const tmdbId = params.tmdbId || '1399';
                          const season = params.season || '1';
                            const episode = params.episode || '1';

                              // 2. Konstruksi URL upstream ke VidPlus
                                const upstreamUrl = `https://player.vidplus.to/embed/tv/${tmdbId}/${season}/${episode}`;

                                  // 3. Render iframe
                                    return (
                                        <iframe
                                              src={upstreamUrl}
                                                    title="KlikPlay Series Player"
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
}