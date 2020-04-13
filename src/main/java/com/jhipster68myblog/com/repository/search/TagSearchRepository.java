package com.jhipster68myblog.com.repository.search;

import com.jhipster68myblog.com.domain.Tag;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Tag} entity.
 */
public interface TagSearchRepository extends ElasticsearchRepository<Tag, Long> {
}
