import { memo } from 'react';

import { createExcerpt } from '../../utils/excerpt-utils';
import { ArticleTile } from '../ArticleTile/ArticleTile';

import type { ArticleTileArticle, ArticleTileBlog } from '../ArticleTile/ArticleTile';

export type Hit = {
  readonly objectID: string;
  readonly href: string;
  readonly publishedAt: string;
  readonly slug: string;
  readonly description?: string;
  readonly title: string;
  readonly blog: {
    readonly name: string;
    readonly href: string;
    readonly favicon?: string;
  };
};

type HitProps = {
  readonly hit: Hit;
};

const hitToArticle = (hit: Hit): ArticleTileArticle => ({
  ...hit,
  publishedAt: new Date(hit.publishedAt),
  excerpt: createExcerpt(hit.description || ''),
  blog: {
    ...hit.blog,
    favicon: hit.blog.favicon ?? null,
  },
});

const hitToBlog = (hit: Hit): ArticleTileBlog => ({
  name: hit.blog.name,
  href: hit.blog.href,
  favicon: hit.blog.favicon ?? null,
});

export const AlgoliaHit = memo(
  ({ hit }: HitProps) => <ArticleTile article={hitToArticle(hit)} blog={hitToBlog(hit)} />,
  ({ hit: prev }, { hit: next }) => prev.objectID === next.objectID,
);
AlgoliaHit.displayName = 'AlogliaHit';
