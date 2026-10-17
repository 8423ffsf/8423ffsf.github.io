'use strict';

hexo.extend.filter.register('after_render:html', function(str) {
  const prefix = (hexo.config.cdn_prefix || '').replace(/\/+$/, '');
  if (!prefix) return str;
  return str
    .replace(/(src|data-src|href)="\/images\//g, `$1="${prefix}/images/`)
    .replace(/url\(\/images\//g, `url(${prefix}/images/`);
});
