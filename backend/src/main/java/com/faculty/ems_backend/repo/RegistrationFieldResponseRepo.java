package com.faculty.ems_backend.repo;

import com.faculty.ems_backend.model.RegistrationFieldResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface RegistrationFieldResponseRepo extends JpaRepository<RegistrationFieldResponse, Long> {

    // එක් ලියාපදිංචියකට අදාළ සියලුම පිළිතුරු ලබා ගැනීමට
    List<RegistrationFieldResponse> findByRegistrationId(Long registrationId);
}