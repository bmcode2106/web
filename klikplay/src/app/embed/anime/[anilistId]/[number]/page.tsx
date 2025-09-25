interface AnimeEmbedPageProps {
      params: {
          anilistId: string;
              number: string;
                };
                  searchParams: {
                      [key: string]: string | string[] | undefined;
                        };
                        }

                        export default function AnimeEmbedPage({ params, searchParams }: AnimeEmbedPageProps) {
                          // 1. Validasi dan fallback untuk path parameters
                            const anilistId = params.anilistId || '21';
                              const number = params.number || '1';

                                // 2. Ekstraksi dan validasi query parameter 'dub'
                                  const isDubbed = searchParams.dub === 'true';

                                    // 3. Konstruksi URL upstream ke VidPlus
                                      const upstreamUrl = `https://player.vidplus.to/embed/anime/${anilistId}/${number}?dub=${isDubbed}`;

                                        // 4. Render iframe
                                          return (
                                              <iframe
                                                    src={upstreamUrl}
                                                          title="KlikPlay Anime Player"
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