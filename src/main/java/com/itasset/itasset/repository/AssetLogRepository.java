package com.itasset.itasset.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.itasset.itasset.model.AssetLog;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetLogRepository extends JpaRepository<AssetLog, Integer>  {
    
}