package com.jhipster68myblog.com.repository.search;

import com.jhipster68myblog.com.domain.Blog;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Blog} entity.
 */
public interface BlogSearchRepository extends ElasticsearchRepository<Blog, Long> {
}
