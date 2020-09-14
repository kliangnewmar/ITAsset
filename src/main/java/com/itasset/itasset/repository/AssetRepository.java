package com.itasset.itasset.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.itasset.itasset.model.Asset;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Integer> {
    
}