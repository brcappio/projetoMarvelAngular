export type MarvelCharacter = {
  id: number;
  name: string;
  description: string;
  comics: { available: number };
  series: { available: number };
  stories: { available: number };
  events: { available: number };
}
