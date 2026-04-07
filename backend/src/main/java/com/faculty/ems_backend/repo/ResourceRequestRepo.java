package com.faculty.ems_backend.repo;

import com.faculty.ems_backend.model.ResourceRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResourceRequestRepo extends JpaRepository<ResourceRequest, Long> {
}