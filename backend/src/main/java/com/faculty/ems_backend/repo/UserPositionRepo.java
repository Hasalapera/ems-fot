package com.faculty.ems_backend.repo;

import com.faculty.ems_backend.model.UserPosition;
import com.faculty.ems_backend.model.Designation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserPositionRepo extends JpaRepository<UserPosition, Long> {

    // දැනට සක්‍රීයව තනතුර දරන අය පමණක් සෙවීමට
    List<UserPosition> findByDesignationAndIsActiveTrue(Designation designation);
}