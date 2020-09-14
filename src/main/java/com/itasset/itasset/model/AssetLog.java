package com.itasset.itasset.model;

import javax.persistence.*;
import java.time.LocalDateTime;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Entity
@Data
@Table(name="asset_log")
public class AssetLog {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(columnDefinition = "int(10) unsigned")
    private Integer id;

    @Column(nullable = false,columnDefinition = "smallint(5) unsigned")
    private int asset_id;

    @Column(nullable = false,columnDefinition = "smallint(5) unsigned")
    private int activity_id;

    @Column(nullable = false, columnDefinition = "TIMESTAMP")
    private LocalDateTime logged_on;

    @Column(nullable = false,columnDefinition = "smallint(5) unsigned")
    private int logged_by_userid;

    @Column(nullable = false,length = 40)
    private String from_location;

    @Column(nullable = false,length = 40)
    private String to_location;

    @Column(nullable = false,length = 20)
    private String from_dept;

    @Column(nullable = false,length = 20)
    private String to_dept;

    @Column(nullable = false,length = 20)
    private String from_assigned;

    @Column(nullable = false, length = 20)
    private String to_assigned;

    @Column(nullable = false,columnDefinition = "text")
    private String notes;

    
}