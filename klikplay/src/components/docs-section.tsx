import Link from 'next/link';
import { ApiEndpointCard } from './api-endpoint-card';

const apiEndpoints = [
  {
      title: "Embed Movies",
          description: (
                <>
                        ID is required from{" "}
                                <Link href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">
                                          The Movie Database (TMDB)
                                                  </Link>.
                                                        </>
                                                            ),
                                                                urlFormat: "https://relatein.web.id/embed/movie/{tmdbId}",
                                                                    exampleUrl: '<iframe src="https://relatein.web.id/embed/movie/78692"></iframe>',
                                                                      },
                                                                        {
                                                                            title: "Embed Series",
                                                                                description: (
                                                                                      <>
                                                                                              TMDB ID, season, and episode number are required.
                                                                                                    </>
                                                                                                        ),
                                                                                                            urlFormat: "https://relatein.web.id/embed/tv/{tmdbId}/{season}/{episode}",
                                                                                                                exampleUrl: '<iframe src="https://relatein.web.id/embed/tv/94997/1/1"></iframe>',
                                                                                                                  },
                                                                                                                    {
                                                                                                                        title: "Embed Anime",
                                                                                                                            description: (
                                                                                                                                  <>
                                                                                                                                          ID is required from{" "}
                                                                                                                                                  <Link href="https://anilist.co/" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline-offset-4 hover:underline">
                                                                                                                                                            Anilist
                                                                                                                                                                    </Link>
                                                                                                                                                                            . Dub parameter is optional.
                                                                                                                                                                                  </>
                                                                                                                                                                                      ),
                                                                                                                                                                                          urlFormat: "https://relatein.web.id/embed/anime/{anilistId}/{number}?dub={true|false}",
                                                                                                                                                                                              exampleUrl: '<iframe src="https://relatein.web.id/embed/anime/21/1?dub=true"></iframe>',
                                                                                                                                                                                                },
                                                                                                                                                                                                ];

                                                                                                                                                                                                export function DocsSection() {
                                                                                                                                                                                                  return (
                                                                                                                                                                                                      <section id="docs" className="border-t py-24 sm:py-32">
                                                                                                                                                                                                            <div className="container px-4">
                                                                                                                                                                                                                    <div className="mx-auto max-w-2xl text-center">
                                                                                                                                                                                                                              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">API Documentation</h2>
                                                                                                                                                                                                                                        <p className="mt-4 text-lg text-muted-foreground">
                                                                                                                                                                                                                                                    Simple and powerful URL structures to embed any content you need.
                                                                                                                                                                                                                                                              </p>
                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                              <div className="mx-auto mt-16 grid max-w-4xl gap-8">
                                                                                                                                                                                                                                                                                        {apiEndpoints.map((endpoint) => (
                                                                                                                                                                                                                                                                                                    <ApiEndpointCard key={endpoint.title} {...endpoint} />
                                                                                                                                                                                                                                                                                                              ))}
                                                                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                                                                </section>
                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                  }