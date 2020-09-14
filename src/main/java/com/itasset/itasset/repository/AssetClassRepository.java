package com.itasset.itasset.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.itasset.itasset.model.AssetClass;
import org.springframework.stereotype.Repository;

@Repository
public interface AssetClassRepository extends JpaRepository<AssetClass, Integer> {
  
}