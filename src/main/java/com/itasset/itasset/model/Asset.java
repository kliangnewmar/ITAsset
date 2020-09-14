package com.itasset.itasset.model;

import javax.persistence.*;

import lombok.Data;
import lombok.NoArgsConstructor;
import java.sql.Date;
import java.time.LocalDateTime;

@NoArgsConstructor
@Entity
@Data
@Table(name="asset")
public class Asset {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(columnDefinition = "int(10) unsigned")
    private Integer id;

    @Column(nullable = false,columnDefinition = "smallint(5) unsigned")
    private int status;

    @Column(nullable = false,columnDefinition = "smallint(5) unsigned")
    private int asset_class_id;

    @Column(nullable = false,columnDefinition = "int(10) unsigned")
    private Integer issues_id;

    @Column(nullable = false,length = 20)
    private String brand;

    @Column(nullable = false,length = 50)
    private String model;

    @Column(nullable = false,length = 100)
    private String serial;

    @Column(nullable = false,length = 80)
    private String description;

    @Column(nullable = false,length = 40)
    private String location;

    @Column(nullable = false,length = 20)
    private String assinged_to;

    @Column(nullable = false,length = 10)
    private String company;

    @Column(nullable = false,length = 20)
    private String company_dept;

    @Column(nullable = false,length = 20)
    private String phone;

    @Column(nullable=false,name = "\"condition\"",length=12)
    private String condition;

    @Column(nullable = false)
    private Date purchase_date;

    @Column(nullable = false)
    private float asset_value;

    @Column(nullable = false,columnDefinition = "tinyint(1) unsigned")
    private int disposed;

    @Column(nullable = false)
    private Date dispose_date;

    @Column(nullable = false,columnDefinition = "text")
    private String notes;

    @Column(nullable = false,length = 16)
    private String domain;

    @Column(nullable = false,length = 35)
    private String name;

    @Column(nullable = false,length = 24)
    private String ip_addr;

    @Column(nullable = false,columnDefinition = "tinyint(1) unsigned")
    private int static_ip;

    @Column(nullable = false,length = 17)
    private String mac_addr;

    @Column(nullable = false,length = 20)
    private String login_name;

    @Column(nullable = false, columnDefinition = "TIMESTAMP")
    private LocalDateTime created_on;

    @Column(nullable = false,columnDefinition = "smallint(5) unsigned")
    private int created_by_userid;

    @Column(nullable = false, columnDefinition = "TIMESTAMP")
    private LocalDateTime updated_on;

    @Column(nullable = false,columnDefinition = "smallint(5) unsigned")
    private int updated_by_userid;

    @Column(nullable = false,columnDefinition = "text")
    private String user1_notes;

    @Column(nullable = false,length = 30)
    private String user1;

    @Column(nullable = false,length = 128)
    private String password1;

    @Column(nullable = false,columnDefinition = "int(10) unsigned")
    private Integer login_type1;

    @Column(nullable = false,columnDefinition = "text")
    private String user2_notes;

    @Column(nullable = false,length = 30)
    private String user2;

    @Column(nullable = false,length = 128)
    private String password2;

    @Column(nullable = false,columnDefinition = "int(10) unsigned")
    private Integer login_type2;

    @Column(nullable = false,columnDefinition = "text")
    private String user3_notes;

    @Column(nullable = false,length = 30)
    private String user3;

    @Column(nullable = false,length = 128)
    private String password3;

    @Column(nullable = false,columnDefinition = "int(10) unsigned")
    private Integer login_type3;

    @Column(nullable = false)
    private Date warranty_exp;

    @Column(nullable = false,length = 20)
    private String warranty_type;

    @Column(nullable = false,columnDefinition = "tinyint(1) unsigned")
    private int offsite_allowed;

    @Column(nullable = false,columnDefinition = "text")
    private String accessories;

    
}