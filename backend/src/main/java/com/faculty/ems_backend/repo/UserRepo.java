package com.faculty.ems_backend.repo;

import com.faculty.ems_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    // ඊමේල් එක මඟින් User කෙනෙක්ව සොයා ගැනීමට (Login සඳහා වැදගත් වේ)
    Optional<User> findByEmail(String email);
}