package com.faculty.ems_backend.repo;

import com.faculty.ems_backend.model.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrganizationRepo extends JpaRepository<Organization, Long> {
    // අවශ්‍ය නම් නම අනුව සෙවීමට:
    // Optional<Organization> findByName(String name);
}