package com.EM.EduMedia.Service;

import com.EM.EduMedia.Model.School;
import com.EM.EduMedia.Repository.SchoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SchoolService {

    @Autowired
    private SchoolRepository schoolRepository;

    public List<School> findAllSchools() {
        return schoolRepository.findAll();
    }
}
