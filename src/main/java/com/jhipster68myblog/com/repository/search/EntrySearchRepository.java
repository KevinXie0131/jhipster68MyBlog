package com.jhipster68myblog.com.repository.search;

import com.jhipster68myblog.com.domain.Entry;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the {@link Entry} entity.
 */
public interface EntrySearchRepository extends ElasticsearchRepository<Entry, Long> {
}
