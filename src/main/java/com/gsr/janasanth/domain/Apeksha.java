package com.gsr.janasanth.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A Apeksha.
 */
@Entity
@Table(name = "apeksha")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "apeksha")
public class Apeksha extends AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "application_number")
    private String applicationNumber;

    @NotNull
    @Column(name = "beneficiary_name", nullable = false)
    private String beneficiaryName;

    @NotNull
    @Column(name = "district", nullable = false)
    private String district;

    @NotNull
    @Column(name = "gender", nullable = false)
    private String gender;

    @Column(name = "fathers_name")
    private String fathersName;

    @NotNull
    @Column(name = "age", nullable = false)
    private Integer age;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    @NotNull
    @Column(name = "aadhar_number", nullable = false)
    private String aadharNumber;

    @NotNull
    @Column(name = "ration_card_number", nullable = false)
    private String rationCardNumber;

    @Column(name = "ration_card_category")
    private String rationCardCategory;

    @NotNull
    @Column(name = "caste", nullable = false)
    private String caste;

    @NotNull
    @Column(name = "religion", nullable = false)
    private String religion;

    @Column(name = "house_name")
    private String houseName;

    @Column(name = "house_number")
    private String houseNumber;

    @Column(name = "tc_number")
    private String tcNumber;

    @NotNull
    @Column(name = "village", nullable = false)
    private String village;

    @Column(name = "taluk")
    private String taluk;

    @Column(name = "panchayat")
    private String panchayat;

    @Column(name = "post_office")
    private String postOffice;

    @Column(name = "pin_code")
    private String pinCode;

    @NotNull
    @Column(name = "mobile_number", nullable = false)
    private String mobileNumber;

    @Column(name = "land_line_with_std")
    private String landLineWithSTD;

    @Column(name = "occupation")
    private String occupation;

    @NotNull
    @Column(name = "annual_income", nullable = false)
    private Double annualIncome;

    @Column(name = "family_details")
    private String familyDetails;

    @Column(name = "land_total_cent")
    private String landTotalCent;

    @Column(name = "land_thaluk")
    private String landThaluk;

    @Column(name = "land_village")
    private String landVillage;

    @Column(name = "land_district")
    private String landDistrict;

    @NotNull
    @Column(name = "requirement_purpose", nullable = false)
    private String requirementPurpose;

    @Column(name = "recommendation_minister")
    private String recommendationMinister;

    @Column(name = "recommendation_mla")
    private String recommendationMLA;

    @Column(name = "recommendation_mp")
    private String recommendationMP;

    @Column(name = "recommendation_others")
    private String recommendationOthers;

    @NotNull
    @Column(name = "hospital_name", nullable = false)
    private String hospitalName;

    @Column(name = "treatment_history")
    private String treatmentHistory;

    @NotNull
    @Column(name = "expected_amount", nullable = false)
    private Double expectedAmount;

    @Column(name = "any_amount_receiving_from_govt")
    private Double anyAmountReceivingFromGovt;

    @Column(name = "govt_amount_purpose_details")
    private String govtAmountPurposeDetails;

    @Column(name = "bank_name")
    private String bankName;

    @Column(name = "bank_branch_name")
    private String bankBranchName;

    @Column(name = "bank_account_number")
    private String bankAccountNumber;

    @Column(name = "bank_ifsc_code")
    private String bankIfscCode;

    @Lob
    @Column(name = "additional_documents")
    private byte[] additionalDocuments;

    @Column(name = "additional_documents_content_type")
    private String additionalDocumentsContentType;

    @Column(name = "remarks")
    private String remarks;

    @Column(name = "date_of_applcation")
    private LocalDate dateOfApplcation;

    @Column(name = "nominee_available")
    private String nomineeAvailable;

    @Column(name = "nominee_name")
    private String nomineeName;

    @Column(name = "nominee_gender")
    private String nomineeGender;

    @Column(name = "nominee_age")
    private Integer nomineeAge;

    @Column(name = "nominee_relationship")
    private String nomineeRelationship;

    @Column(name = "nominee_house_name")
    private String nomineeHouseName;

    @Column(name = "nominee_house_number")
    private String nomineeHouseNumber;

    @Column(name = "nominee_tc_no")
    private String nomineeTcNo;

    @Column(name = "nominee_village")
    private String nomineeVillage;

    @Column(name = "nominee_thaluk")
    private String nomineeThaluk;

    @Column(name = "nominee_panchayat")
    private String nomineePanchayat;

    @Column(name = "nominee_post_office")
    private String nomineePostOffice;

    @Column(name = "nominee_pin_code")
    private String nomineePinCode;

    @Column(name = "nominee_mobile_number")
    private String nomineeMobileNumber;

    @Column(name = "nominee_land_line_with_std")
    private String nomineeLandLineWithSTD;

    @Column(name = "nominee_bank_name")
    private String nomineeBankName;

    @Column(name = "nominee_bank_branch")
    private String nomineeBankBranch;

    @Column(name = "nominee_bank_account_number")
    private String nomineeBankAccountNumber;

    @Column(name = "nominee_bank_ifsc_code")
    private String nomineeBankIfscCode;

    @Lob
    @Column(name = "photo")
    private byte[] photo;

    @Column(name = "photo_content_type")
    private String photoContentType;

    @Lob
    @Column(name = "application_form")
    private byte[] applicationForm;

    @Column(name = "application_form_content_type")
    private String applicationFormContentType;

    @Lob
    @Column(name = "aadhar_card")
    private byte[] aadharCard;

    @Column(name = "aadhar_card_content_type")
    private String aadharCardContentType;

    @Lob
    @Column(name = "ration_card")
    private byte[] rationCard;

    @Column(name = "ration_card_content_type")
    private String rationCardContentType;

    @Lob
    @Column(name = "doctor_report")
    private byte[] doctorReport;

    @Column(name = "doctor_report_content_type")
    private String doctorReportContentType;

    @Lob
    @Column(name = "bank_passbook_front_page")
    private byte[] bankPassbookFrontPage;

    @Column(name = "bank_passbook_front_page_content_type")
    private String bankPassbookFrontPageContentType;

    @Lob
    @Column(name = "nominee_photo")
    private byte[] nomineePhoto;

    @Column(name = "nominee_photo_content_type")
    private String nomineePhotoContentType;

    @Lob
    @Column(name = "nominee_aadhar_card_ration_card")
    private byte[] nomineeAadharCardRationCard;

    @Column(name = "nominee_aadhar_card_ration_card_content_type")
    private String nomineeAadharCardRationCardContentType;

    @Lob
    @Column(name = "nominee_relation_ship_proof")
    private byte[] nomineeRelationShipProof;

    @Column(name = "nominee_relation_ship_proof_content_type")
    private String nomineeRelationShipProofContentType;

    @Lob
    @Column(name = "nominee_bank_passbook_front_page")
    private byte[] nomineeBankPassbookFrontPage;

    @Column(name = "nominee_bank_passbook_front_page_content_type")
    private String nomineeBankPassbookFrontPageContentType;
    
    @Column(name = "is_applicant_different_from_benefeciary")
    private String isApplicantDifferentFromBenefeciary;

    @Column(name = "voters_card_number")
    private String votersCardNumber;

    @Column(name = "applicant_place")
    private String applicantPlace;

    @Column(name = "on_behalf_applicant_name")
    private String onBehalfApplicantName;

    @Column(name = "on_behalf_applicant_id_proof")
    private String onBehalfApplicantIDProof;

    @Column(name = "on_behalf_applicant_id_proof_number")
    private String onBehalfApplicantIdProofNumber;

    @Column(name = "on_behalf_applicant_relationship")
    private String onBehalfApplicantRelationship;

    @Column(name = "on_behalf_applicant_mobile_number")
    private String onBehalfApplicantMobileNumber;

    @Column(name = "benefieciary_has_own_property")
    private String benefieciaryHasOwnProperty;

    @Column(name = "has_recommendation")
    private String hasRecommendation;

    @Column(name = "is_recommendation_from_chief_minister")
    private String isRecommendationFromChiefMinister;

    @Column(name = "is_any_amount_receiving_from_govt")
    private String isAnyAmountReceivingFromGovt;

    @Column(name = "is_nominee_available")
    private String isNomineeAvailable;

    @Column(name = "is_panchayat_corporation_municipality")
    private String isPanchayatCorporationMunicipality;

    @Column(name = "nominee_place")
    private String nomineePlace;

    @Column(name = "nominee_panchayat_corporation_municipality")
    private String nomineePanchayatCorporationMunicipality;

    @Column(name = "applicant_extra_field_1")
    private String applicantExtraField1;

    @Column(name = "applicant_extra_field_2")
    private String applicantExtraField2;

    @Column(name = "applicant_extra_field_3")
    private String applicantExtraField3;

    @Column(name = "benefieciary_extra_field_1")
    private String benefieciaryExtraField1;

    @Column(name = "general_purpose_extra_field_1")
    private String generalPurposeExtraField1;

    @Column(name = "general_purpose_extra_field_2")
    private String generalPurposeExtraField2;

    @Column(name = "general_purpose_extra_field_3")
    private String generalPurposeExtraField3;
    

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getApplicationNumber() {
        return applicationNumber;
    }

    public Apeksha applicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
        return this;
    }

    public void setApplicationNumber(String applicationNumber) {
        this.applicationNumber = applicationNumber;
    }

    public String getBeneficiaryName() {
        return beneficiaryName;
    }

    public Apeksha beneficiaryName(String beneficiaryName) {
        this.beneficiaryName = beneficiaryName;
        return this;
    }

    public void setBeneficiaryName(String beneficiaryName) {
        this.beneficiaryName = beneficiaryName;
    }

    public String getDistrict() {
        return district;
    }

    public Apeksha district(String district) {
        this.district = district;
        return this;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getGender() {
        return gender;
    }

    public Apeksha gender(String gender) {
        this.gender = gender;
        return this;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getFathersName() {
        return fathersName;
    }

    public Apeksha fathersName(String fathersName) {
        this.fathersName = fathersName;
        return this;
    }

    public void setFathersName(String fathersName) {
        this.fathersName = fathersName;
    }

    public Integer getAge() {
        return age;
    }

    public Apeksha age(Integer age) {
        this.age = age;
        return this;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public Apeksha dateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAadharNumber() {
        return aadharNumber;
    }

    public Apeksha aadharNumber(String aadharNumber) {
        this.aadharNumber = aadharNumber;
        return this;
    }

    public void setAadharNumber(String aadharNumber) {
        this.aadharNumber = aadharNumber;
    }

    public String getRationCardNumber() {
        return rationCardNumber;
    }

    public Apeksha rationCardNumber(String rationCardNumber) {
        this.rationCardNumber = rationCardNumber;
        return this;
    }

    public void setRationCardNumber(String rationCardNumber) {
        this.rationCardNumber = rationCardNumber;
    }

    public String getRationCardCategory() {
        return rationCardCategory;
    }

    public Apeksha rationCardCategory(String rationCardCategory) {
        this.rationCardCategory = rationCardCategory;
        return this;
    }

    public void setRationCardCategory(String rationCardCategory) {
        this.rationCardCategory = rationCardCategory;
    }

    public String getCaste() {
        return caste;
    }

    public Apeksha caste(String caste) {
        this.caste = caste;
        return this;
    }

    public void setCaste(String caste) {
        this.caste = caste;
    }

    public String getReligion() {
        return religion;
    }

    public Apeksha religion(String religion) {
        this.religion = religion;
        return this;
    }

    public void setReligion(String religion) {
        this.religion = religion;
    }

    public String getHouseName() {
        return houseName;
    }

    public Apeksha houseName(String houseName) {
        this.houseName = houseName;
        return this;
    }

    public void setHouseName(String houseName) {
        this.houseName = houseName;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public Apeksha houseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
        return this;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getTcNumber() {
        return tcNumber;
    }

    public Apeksha tcNumber(String tcNumber) {
        this.tcNumber = tcNumber;
        return this;
    }

    public void setTcNumber(String tcNumber) {
        this.tcNumber = tcNumber;
    }

    public String getVillage() {
        return village;
    }

    public Apeksha village(String village) {
        this.village = village;
        return this;
    }

    public void setVillage(String village) {
        this.village = village;
    }

    public String getTaluk() {
        return taluk;
    }

    public Apeksha taluk(String taluk) {
        this.taluk = taluk;
        return this;
    }

    public void setTaluk(String taluk) {
        this.taluk = taluk;
    }

    public String getPanchayat() {
        return panchayat;
    }

    public Apeksha panchayat(String panchayat) {
        this.panchayat = panchayat;
        return this;
    }

    public void setPanchayat(String panchayat) {
        this.panchayat = panchayat;
    }

    public String getPostOffice() {
        return postOffice;
    }

    public Apeksha postOffice(String postOffice) {
        this.postOffice = postOffice;
        return this;
    }

    public void setPostOffice(String postOffice) {
        this.postOffice = postOffice;
    }

    public String getPinCode() {
        return pinCode;
    }

    public Apeksha pinCode(String pinCode) {
        this.pinCode = pinCode;
        return this;
    }

    public void setPinCode(String pinCode) {
        this.pinCode = pinCode;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public Apeksha mobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
        return this;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getLandLineWithSTD() {
        return landLineWithSTD;
    }

    public Apeksha landLineWithSTD(String landLineWithSTD) {
        this.landLineWithSTD = landLineWithSTD;
        return this;
    }

    public void setLandLineWithSTD(String landLineWithSTD) {
        this.landLineWithSTD = landLineWithSTD;
    }

    public String getOccupation() {
        return occupation;
    }

    public Apeksha occupation(String occupation) {
        this.occupation = occupation;
        return this;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public Double getAnnualIncome() {
        return annualIncome;
    }

    public Apeksha annualIncome(Double annualIncome) {
        this.annualIncome = annualIncome;
        return this;
    }

    public void setAnnualIncome(Double annualIncome) {
        this.annualIncome = annualIncome;
    }

    public String getFamilyDetails() {
        return familyDetails;
    }

    public Apeksha familyDetails(String familyDetails) {
        this.familyDetails = familyDetails;
        return this;
    }

    public void setFamilyDetails(String familyDetails) {
        this.familyDetails = familyDetails;
    }

    public String getLandTotalCent() {
        return landTotalCent;
    }

    public Apeksha landTotalCent(String landTotalCent) {
        this.landTotalCent = landTotalCent;
        return this;
    }

    public void setLandTotalCent(String landTotalCent) {
        this.landTotalCent = landTotalCent;
    }

    public String getLandThaluk() {
        return landThaluk;
    }

    public Apeksha landThaluk(String landThaluk) {
        this.landThaluk = landThaluk;
        return this;
    }

    public void setLandThaluk(String landThaluk) {
        this.landThaluk = landThaluk;
    }

    public String getLandVillage() {
        return landVillage;
    }

    public Apeksha landVillage(String landVillage) {
        this.landVillage = landVillage;
        return this;
    }

    public void setLandVillage(String landVillage) {
        this.landVillage = landVillage;
    }

    public String getLandDistrict() {
        return landDistrict;
    }

    public Apeksha landDistrict(String landDistrict) {
        this.landDistrict = landDistrict;
        return this;
    }

    public void setLandDistrict(String landDistrict) {
        this.landDistrict = landDistrict;
    }

    public String getRequirementPurpose() {
        return requirementPurpose;
    }

    public Apeksha requirementPurpose(String requirementPurpose) {
        this.requirementPurpose = requirementPurpose;
        return this;
    }

    public void setRequirementPurpose(String requirementPurpose) {
        this.requirementPurpose = requirementPurpose;
    }

    public String getRecommendationMinister() {
        return recommendationMinister;
    }

    public Apeksha recommendationMinister(String recommendationMinister) {
        this.recommendationMinister = recommendationMinister;
        return this;
    }

    public void setRecommendationMinister(String recommendationMinister) {
        this.recommendationMinister = recommendationMinister;
    }

    public String getRecommendationMLA() {
        return recommendationMLA;
    }

    public Apeksha recommendationMLA(String recommendationMLA) {
        this.recommendationMLA = recommendationMLA;
        return this;
    }

    public void setRecommendationMLA(String recommendationMLA) {
        this.recommendationMLA = recommendationMLA;
    }

    public String getRecommendationMP() {
        return recommendationMP;
    }

    public Apeksha recommendationMP(String recommendationMP) {
        this.recommendationMP = recommendationMP;
        return this;
    }

    public void setRecommendationMP(String recommendationMP) {
        this.recommendationMP = recommendationMP;
    }

    public String getRecommendationOthers() {
        return recommendationOthers;
    }

    public Apeksha recommendationOthers(String recommendationOthers) {
        this.recommendationOthers = recommendationOthers;
        return this;
    }

    public void setRecommendationOthers(String recommendationOthers) {
        this.recommendationOthers = recommendationOthers;
    }

    public String getHospitalName() {
        return hospitalName;
    }

    public Apeksha hospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
        return this;
    }

    public void setHospitalName(String hospitalName) {
        this.hospitalName = hospitalName;
    }

    public String getTreatmentHistory() {
        return treatmentHistory;
    }

    public Apeksha treatmentHistory(String treatmentHistory) {
        this.treatmentHistory = treatmentHistory;
        return this;
    }

    public void setTreatmentHistory(String treatmentHistory) {
        this.treatmentHistory = treatmentHistory;
    }

    public Double getExpectedAmount() {
        return expectedAmount;
    }

    public Apeksha expectedAmount(Double expectedAmount) {
        this.expectedAmount = expectedAmount;
        return this;
    }

    public void setExpectedAmount(Double expectedAmount) {
        this.expectedAmount = expectedAmount;
    }

    public Double getAnyAmountReceivingFromGovt() {
        return anyAmountReceivingFromGovt;
    }

    public Apeksha anyAmountReceivingFromGovt(Double anyAmountReceivingFromGovt) {
        this.anyAmountReceivingFromGovt = anyAmountReceivingFromGovt;
        return this;
    }

    public void setAnyAmountReceivingFromGovt(Double anyAmountReceivingFromGovt) {
        this.anyAmountReceivingFromGovt = anyAmountReceivingFromGovt;
    }

    public String getGovtAmountPurposeDetails() {
        return govtAmountPurposeDetails;
    }

    public Apeksha govtAmountPurposeDetails(String govtAmountPurposeDetails) {
        this.govtAmountPurposeDetails = govtAmountPurposeDetails;
        return this;
    }

    public void setGovtAmountPurposeDetails(String govtAmountPurposeDetails) {
        this.govtAmountPurposeDetails = govtAmountPurposeDetails;
    }

    public String getBankName() {
        return bankName;
    }

    public Apeksha bankName(String bankName) {
        this.bankName = bankName;
        return this;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getBankBranchName() {
        return bankBranchName;
    }

    public Apeksha bankBranchName(String bankBranchName) {
        this.bankBranchName = bankBranchName;
        return this;
    }

    public void setBankBranchName(String bankBranchName) {
        this.bankBranchName = bankBranchName;
    }

    public String getBankAccountNumber() {
        return bankAccountNumber;
    }

    public Apeksha bankAccountNumber(String bankAccountNumber) {
        this.bankAccountNumber = bankAccountNumber;
        return this;
    }

    public void setBankAccountNumber(String bankAccountNumber) {
        this.bankAccountNumber = bankAccountNumber;
    }

    public String getBankIfscCode() {
        return bankIfscCode;
    }

    public Apeksha bankIfscCode(String bankIfscCode) {
        this.bankIfscCode = bankIfscCode;
        return this;
    }

    public void setBankIfscCode(String bankIfscCode) {
        this.bankIfscCode = bankIfscCode;
    }

    public byte[] getAdditionalDocuments() {
        return additionalDocuments;
    }

    public Apeksha additionalDocuments(byte[] additionalDocuments) {
        this.additionalDocuments = additionalDocuments;
        return this;
    }

    public void setAdditionalDocuments(byte[] additionalDocuments) {
        this.additionalDocuments = additionalDocuments;
    }

    public String getAdditionalDocumentsContentType() {
        return additionalDocumentsContentType;
    }

    public Apeksha additionalDocumentsContentType(String additionalDocumentsContentType) {
        this.additionalDocumentsContentType = additionalDocumentsContentType;
        return this;
    }

    public void setAdditionalDocumentsContentType(String additionalDocumentsContentType) {
        this.additionalDocumentsContentType = additionalDocumentsContentType;
    }

    public String getRemarks() {
        return remarks;
    }

    public Apeksha remarks(String remarks) {
        this.remarks = remarks;
        return this;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }

    public LocalDate getDateOfApplcation() {
        return dateOfApplcation;
    }

    public Apeksha dateOfApplcation(LocalDate dateOfApplcation) {
        this.dateOfApplcation = dateOfApplcation;
        return this;
    }

    public void setDateOfApplcation(LocalDate dateOfApplcation) {
        this.dateOfApplcation = dateOfApplcation;
    }

    public String getNomineeAvailable() {
        return nomineeAvailable;
    }

    public Apeksha nomineeAvailable(String nomineeAvailable) {
        this.nomineeAvailable = nomineeAvailable;
        return this;
    }

    public void setNomineeAvailable(String nomineeAvailable) {
        this.nomineeAvailable = nomineeAvailable;
    }

    public String getNomineeName() {
        return nomineeName;
    }

    public Apeksha nomineeName(String nomineeName) {
        this.nomineeName = nomineeName;
        return this;
    }

    public void setNomineeName(String nomineeName) {
        this.nomineeName = nomineeName;
    }

    public String getNomineeGender() {
        return nomineeGender;
    }

    public Apeksha nomineeGender(String nomineeGender) {
        this.nomineeGender = nomineeGender;
        return this;
    }

    public void setNomineeGender(String nomineeGender) {
        this.nomineeGender = nomineeGender;
    }

    public Integer getNomineeAge() {
        return nomineeAge;
    }

    public Apeksha nomineeAge(Integer nomineeAge) {
        this.nomineeAge = nomineeAge;
        return this;
    }

    public void setNomineeAge(Integer nomineeAge) {
        this.nomineeAge = nomineeAge;
    }

    public String getNomineeRelationship() {
        return nomineeRelationship;
    }

    public Apeksha nomineeRelationship(String nomineeRelationship) {
        this.nomineeRelationship = nomineeRelationship;
        return this;
    }

    public void setNomineeRelationship(String nomineeRelationship) {
        this.nomineeRelationship = nomineeRelationship;
    }

    public String getNomineeHouseName() {
        return nomineeHouseName;
    }

    public Apeksha nomineeHouseName(String nomineeHouseName) {
        this.nomineeHouseName = nomineeHouseName;
        return this;
    }

    public void setNomineeHouseName(String nomineeHouseName) {
        this.nomineeHouseName = nomineeHouseName;
    }

    public String getNomineeHouseNumber() {
        return nomineeHouseNumber;
    }

    public Apeksha nomineeHouseNumber(String nomineeHouseNumber) {
        this.nomineeHouseNumber = nomineeHouseNumber;
        return this;
    }

    public void setNomineeHouseNumber(String nomineeHouseNumber) {
        this.nomineeHouseNumber = nomineeHouseNumber;
    }

    public String getNomineeTcNo() {
        return nomineeTcNo;
    }

    public Apeksha nomineeTcNo(String nomineeTcNo) {
        this.nomineeTcNo = nomineeTcNo;
        return this;
    }

    public void setNomineeTcNo(String nomineeTcNo) {
        this.nomineeTcNo = nomineeTcNo;
    }

    public String getNomineeVillage() {
        return nomineeVillage;
    }

    public Apeksha nomineeVillage(String nomineeVillage) {
        this.nomineeVillage = nomineeVillage;
        return this;
    }

    public void setNomineeVillage(String nomineeVillage) {
        this.nomineeVillage = nomineeVillage;
    }

    public String getNomineeThaluk() {
        return nomineeThaluk;
    }

    public Apeksha nomineeThaluk(String nomineeThaluk) {
        this.nomineeThaluk = nomineeThaluk;
        return this;
    }

    public void setNomineeThaluk(String nomineeThaluk) {
        this.nomineeThaluk = nomineeThaluk;
    }

    public String getNomineePanchayat() {
        return nomineePanchayat;
    }

    public Apeksha nomineePanchayat(String nomineePanchayat) {
        this.nomineePanchayat = nomineePanchayat;
        return this;
    }

    public void setNomineePanchayat(String nomineePanchayat) {
        this.nomineePanchayat = nomineePanchayat;
    }

    public String getNomineePostOffice() {
        return nomineePostOffice;
    }

    public Apeksha nomineePostOffice(String nomineePostOffice) {
        this.nomineePostOffice = nomineePostOffice;
        return this;
    }

    public void setNomineePostOffice(String nomineePostOffice) {
        this.nomineePostOffice = nomineePostOffice;
    }

    public String getNomineePinCode() {
        return nomineePinCode;
    }

    public Apeksha nomineePinCode(String nomineePinCode) {
        this.nomineePinCode = nomineePinCode;
        return this;
    }

    public void setNomineePinCode(String nomineePinCode) {
        this.nomineePinCode = nomineePinCode;
    }

    public String getNomineeMobileNumber() {
        return nomineeMobileNumber;
    }

    public Apeksha nomineeMobileNumber(String nomineeMobileNumber) {
        this.nomineeMobileNumber = nomineeMobileNumber;
        return this;
    }

    public void setNomineeMobileNumber(String nomineeMobileNumber) {
        this.nomineeMobileNumber = nomineeMobileNumber;
    }

    public String getNomineeLandLineWithSTD() {
        return nomineeLandLineWithSTD;
    }

    public Apeksha nomineeLandLineWithSTD(String nomineeLandLineWithSTD) {
        this.nomineeLandLineWithSTD = nomineeLandLineWithSTD;
        return this;
    }

    public void setNomineeLandLineWithSTD(String nomineeLandLineWithSTD) {
        this.nomineeLandLineWithSTD = nomineeLandLineWithSTD;
    }

    public String getNomineeBankName() {
        return nomineeBankName;
    }

    public Apeksha nomineeBankName(String nomineeBankName) {
        this.nomineeBankName = nomineeBankName;
        return this;
    }

    public void setNomineeBankName(String nomineeBankName) {
        this.nomineeBankName = nomineeBankName;
    }

    public String getNomineeBankBranch() {
        return nomineeBankBranch;
    }

    public Apeksha nomineeBankBranch(String nomineeBankBranch) {
        this.nomineeBankBranch = nomineeBankBranch;
        return this;
    }

    public void setNomineeBankBranch(String nomineeBankBranch) {
        this.nomineeBankBranch = nomineeBankBranch;
    }

    public String getNomineeBankAccountNumber() {
        return nomineeBankAccountNumber;
    }

    public Apeksha nomineeBankAccountNumber(String nomineeBankAccountNumber) {
        this.nomineeBankAccountNumber = nomineeBankAccountNumber;
        return this;
    }

    public void setNomineeBankAccountNumber(String nomineeBankAccountNumber) {
        this.nomineeBankAccountNumber = nomineeBankAccountNumber;
    }

    public String getNomineeBankIfscCode() {
        return nomineeBankIfscCode;
    }

    public Apeksha nomineeBankIfscCode(String nomineeBankIfscCode) {
        this.nomineeBankIfscCode = nomineeBankIfscCode;
        return this;
    }

    public void setNomineeBankIfscCode(String nomineeBankIfscCode) {
        this.nomineeBankIfscCode = nomineeBankIfscCode;
    }

    public byte[] getPhoto() {
        return photo;
    }

    public Apeksha photo(byte[] photo) {
        this.photo = photo;
        return this;
    }

    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }

    public String getPhotoContentType() {
        return photoContentType;
    }

    public Apeksha photoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
        return this;
    }

    public void setPhotoContentType(String photoContentType) {
        this.photoContentType = photoContentType;
    }

    public byte[] getApplicationForm() {
        return applicationForm;
    }

    public Apeksha applicationForm(byte[] applicationForm) {
        this.applicationForm = applicationForm;
        return this;
    }

    public void setApplicationForm(byte[] applicationForm) {
        this.applicationForm = applicationForm;
    }

    public String getApplicationFormContentType() {
        return applicationFormContentType;
    }

    public Apeksha applicationFormContentType(String applicationFormContentType) {
        this.applicationFormContentType = applicationFormContentType;
        return this;
    }

    public void setApplicationFormContentType(String applicationFormContentType) {
        this.applicationFormContentType = applicationFormContentType;
    }

    public byte[] getAadharCard() {
        return aadharCard;
    }

    public Apeksha aadharCard(byte[] aadharCard) {
        this.aadharCard = aadharCard;
        return this;
    }

    public void setAadharCard(byte[] aadharCard) {
        this.aadharCard = aadharCard;
    }

    public String getAadharCardContentType() {
        return aadharCardContentType;
    }

    public Apeksha aadharCardContentType(String aadharCardContentType) {
        this.aadharCardContentType = aadharCardContentType;
        return this;
    }

    public void setAadharCardContentType(String aadharCardContentType) {
        this.aadharCardContentType = aadharCardContentType;
    }

    public byte[] getRationCard() {
        return rationCard;
    }

    public Apeksha rationCard(byte[] rationCard) {
        this.rationCard = rationCard;
        return this;
    }

    public void setRationCard(byte[] rationCard) {
        this.rationCard = rationCard;
    }

    public String getRationCardContentType() {
        return rationCardContentType;
    }

    public Apeksha rationCardContentType(String rationCardContentType) {
        this.rationCardContentType = rationCardContentType;
        return this;
    }

    public void setRationCardContentType(String rationCardContentType) {
        this.rationCardContentType = rationCardContentType;
    }

    public byte[] getDoctorReport() {
        return doctorReport;
    }

    public Apeksha doctorReport(byte[] doctorReport) {
        this.doctorReport = doctorReport;
        return this;
    }

    public void setDoctorReport(byte[] doctorReport) {
        this.doctorReport = doctorReport;
    }

    public String getDoctorReportContentType() {
        return doctorReportContentType;
    }

    public Apeksha doctorReportContentType(String doctorReportContentType) {
        this.doctorReportContentType = doctorReportContentType;
        return this;
    }

    public void setDoctorReportContentType(String doctorReportContentType) {
        this.doctorReportContentType = doctorReportContentType;
    }

    public byte[] getBankPassbookFrontPage() {
        return bankPassbookFrontPage;
    }

    public Apeksha bankPassbookFrontPage(byte[] bankPassbookFrontPage) {
        this.bankPassbookFrontPage = bankPassbookFrontPage;
        return this;
    }

    public void setBankPassbookFrontPage(byte[] bankPassbookFrontPage) {
        this.bankPassbookFrontPage = bankPassbookFrontPage;
    }

    public String getBankPassbookFrontPageContentType() {
        return bankPassbookFrontPageContentType;
    }

    public Apeksha bankPassbookFrontPageContentType(String bankPassbookFrontPageContentType) {
        this.bankPassbookFrontPageContentType = bankPassbookFrontPageContentType;
        return this;
    }

    public void setBankPassbookFrontPageContentType(String bankPassbookFrontPageContentType) {
        this.bankPassbookFrontPageContentType = bankPassbookFrontPageContentType;
    }

    public byte[] getNomineePhoto() {
        return nomineePhoto;
    }

    public Apeksha nomineePhoto(byte[] nomineePhoto) {
        this.nomineePhoto = nomineePhoto;
        return this;
    }

    public void setNomineePhoto(byte[] nomineePhoto) {
        this.nomineePhoto = nomineePhoto;
    }

    public String getNomineePhotoContentType() {
        return nomineePhotoContentType;
    }

    public Apeksha nomineePhotoContentType(String nomineePhotoContentType) {
        this.nomineePhotoContentType = nomineePhotoContentType;
        return this;
    }

    public void setNomineePhotoContentType(String nomineePhotoContentType) {
        this.nomineePhotoContentType = nomineePhotoContentType;
    }

    public byte[] getNomineeAadharCardRationCard() {
        return nomineeAadharCardRationCard;
    }

    public Apeksha nomineeAadharCardRationCard(byte[] nomineeAadharCardRationCard) {
        this.nomineeAadharCardRationCard = nomineeAadharCardRationCard;
        return this;
    }

    public void setNomineeAadharCardRationCard(byte[] nomineeAadharCardRationCard) {
        this.nomineeAadharCardRationCard = nomineeAadharCardRationCard;
    }

    public String getNomineeAadharCardRationCardContentType() {
        return nomineeAadharCardRationCardContentType;
    }

    public Apeksha nomineeAadharCardRationCardContentType(String nomineeAadharCardRationCardContentType) {
        this.nomineeAadharCardRationCardContentType = nomineeAadharCardRationCardContentType;
        return this;
    }

    public void setNomineeAadharCardRationCardContentType(String nomineeAadharCardRationCardContentType) {
        this.nomineeAadharCardRationCardContentType = nomineeAadharCardRationCardContentType;
    }

    public byte[] getNomineeRelationShipProof() {
        return nomineeRelationShipProof;
    }

    public Apeksha nomineeRelationShipProof(byte[] nomineeRelationShipProof) {
        this.nomineeRelationShipProof = nomineeRelationShipProof;
        return this;
    }

    public void setNomineeRelationShipProof(byte[] nomineeRelationShipProof) {
        this.nomineeRelationShipProof = nomineeRelationShipProof;
    }

    public String getNomineeRelationShipProofContentType() {
        return nomineeRelationShipProofContentType;
    }

    public Apeksha nomineeRelationShipProofContentType(String nomineeRelationShipProofContentType) {
        this.nomineeRelationShipProofContentType = nomineeRelationShipProofContentType;
        return this;
    }

    public void setNomineeRelationShipProofContentType(String nomineeRelationShipProofContentType) {
        this.nomineeRelationShipProofContentType = nomineeRelationShipProofContentType;
    }

    public byte[] getNomineeBankPassbookFrontPage() {
        return nomineeBankPassbookFrontPage;
    }

    public Apeksha nomineeBankPassbookFrontPage(byte[] nomineeBankPassbookFrontPage) {
        this.nomineeBankPassbookFrontPage = nomineeBankPassbookFrontPage;
        return this;
    }

    public void setNomineeBankPassbookFrontPage(byte[] nomineeBankPassbookFrontPage) {
        this.nomineeBankPassbookFrontPage = nomineeBankPassbookFrontPage;
    }

    public String getNomineeBankPassbookFrontPageContentType() {
        return nomineeBankPassbookFrontPageContentType;
    }

    public Apeksha nomineeBankPassbookFrontPageContentType(String nomineeBankPassbookFrontPageContentType) {
        this.nomineeBankPassbookFrontPageContentType = nomineeBankPassbookFrontPageContentType;
        return this;
    }

    public void setNomineeBankPassbookFrontPageContentType(String nomineeBankPassbookFrontPageContentType) {
        this.nomineeBankPassbookFrontPageContentType = nomineeBankPassbookFrontPageContentType;
    }
    
    public String getIsApplicantDifferentFromBenefeciary() {
        return isApplicantDifferentFromBenefeciary;
    }

    public Apeksha isApplicantDifferentFromBenefeciary(String isApplicantDifferentFromBenefeciary) {
        this.isApplicantDifferentFromBenefeciary = isApplicantDifferentFromBenefeciary;
        return this;
    }

    public void setIsApplicantDifferentFromBenefeciary(String isApplicantDifferentFromBenefeciary) {
        this.isApplicantDifferentFromBenefeciary = isApplicantDifferentFromBenefeciary;
    }

    public String getVotersCardNumber() {
        return votersCardNumber;
    }

    public Apeksha votersCardNumber(String votersCardNumber) {
        this.votersCardNumber = votersCardNumber;
        return this;
    }

    public void setVotersCardNumber(String votersCardNumber) {
        this.votersCardNumber = votersCardNumber;
    }

    public String getApplicantPlace() {
        return applicantPlace;
    }

    public Apeksha applicantPlace(String applicantPlace) {
        this.applicantPlace = applicantPlace;
        return this;
    }

    public void setApplicantPlace(String applicantPlace) {
        this.applicantPlace = applicantPlace;
    }

    public String getOnBehalfApplicantName() {
        return onBehalfApplicantName;
    }

    public Apeksha onBehalfApplicantName(String onBehalfApplicantName) {
        this.onBehalfApplicantName = onBehalfApplicantName;
        return this;
    }

    public void setOnBehalfApplicantName(String onBehalfApplicantName) {
        this.onBehalfApplicantName = onBehalfApplicantName;
    }

    public String getOnBehalfApplicantIDProof() {
        return onBehalfApplicantIDProof;
    }

    public Apeksha onBehalfApplicantIDProof(String onBehalfApplicantIDProof) {
        this.onBehalfApplicantIDProof = onBehalfApplicantIDProof;
        return this;
    }

    public void setOnBehalfApplicantIDProof(String onBehalfApplicantIDProof) {
        this.onBehalfApplicantIDProof = onBehalfApplicantIDProof;
    }

    public String getOnBehalfApplicantIdProofNumber() {
        return onBehalfApplicantIdProofNumber;
    }

    public Apeksha onBehalfApplicantIdProofNumber(String onBehalfApplicantIdProofNumber) {
        this.onBehalfApplicantIdProofNumber = onBehalfApplicantIdProofNumber;
        return this;
    }

    public void setOnBehalfApplicantIdProofNumber(String onBehalfApplicantIdProofNumber) {
        this.onBehalfApplicantIdProofNumber = onBehalfApplicantIdProofNumber;
    }

    public String getOnBehalfApplicantRelationship() {
        return onBehalfApplicantRelationship;
    }

    public Apeksha onBehalfApplicantRelationship(String onBehalfApplicantRelationship) {
        this.onBehalfApplicantRelationship = onBehalfApplicantRelationship;
        return this;
    }

    public void setOnBehalfApplicantRelationship(String onBehalfApplicantRelationship) {
        this.onBehalfApplicantRelationship = onBehalfApplicantRelationship;
    }

    public String getOnBehalfApplicantMobileNumber() {
        return onBehalfApplicantMobileNumber;
    }

    public Apeksha onBehalfApplicantMobileNumber(String onBehalfApplicantMobileNumber) {
        this.onBehalfApplicantMobileNumber = onBehalfApplicantMobileNumber;
        return this;
    }

    public void setOnBehalfApplicantMobileNumber(String onBehalfApplicantMobileNumber) {
        this.onBehalfApplicantMobileNumber = onBehalfApplicantMobileNumber;
    }

    public String getBenefieciaryHasOwnProperty() {
        return benefieciaryHasOwnProperty;
    }

    public Apeksha benefieciaryHasOwnProperty(String benefieciaryHasOwnProperty) {
        this.benefieciaryHasOwnProperty = benefieciaryHasOwnProperty;
        return this;
    }

    public void setBenefieciaryHasOwnProperty(String benefieciaryHasOwnProperty) {
        this.benefieciaryHasOwnProperty = benefieciaryHasOwnProperty;
    }

    public String getHasRecommendation() {
        return hasRecommendation;
    }

    public Apeksha hasRecommendation(String hasRecommendation) {
        this.hasRecommendation = hasRecommendation;
        return this;
    }

    public void setHasRecommendation(String hasRecommendation) {
        this.hasRecommendation = hasRecommendation;
    }

    public String getIsRecommendationFromChiefMinister() {
        return isRecommendationFromChiefMinister;
    }

    public Apeksha isRecommendationFromChiefMinister(String isRecommendationFromChiefMinister) {
        this.isRecommendationFromChiefMinister = isRecommendationFromChiefMinister;
        return this;
    }

    public void setIsRecommendationFromChiefMinister(String isRecommendationFromChiefMinister) {
        this.isRecommendationFromChiefMinister = isRecommendationFromChiefMinister;
    }

    public String getIsAnyAmountReceivingFromGovt() {
        return isAnyAmountReceivingFromGovt;
    }

    public Apeksha isAnyAmountReceivingFromGovt(String isAnyAmountReceivingFromGovt) {
        this.isAnyAmountReceivingFromGovt = isAnyAmountReceivingFromGovt;
        return this;
    }

    public void setIsAnyAmountReceivingFromGovt(String isAnyAmountReceivingFromGovt) {
        this.isAnyAmountReceivingFromGovt = isAnyAmountReceivingFromGovt;
    }

    public String getIsNomineeAvailable() {
        return isNomineeAvailable;
    }

    public Apeksha isNomineeAvailable(String isNomineeAvailable) {
        this.isNomineeAvailable = isNomineeAvailable;
        return this;
    }

    public void setIsNomineeAvailable(String isNomineeAvailable) {
        this.isNomineeAvailable = isNomineeAvailable;
    }

    public String getIsPanchayatCorporationMunicipality() {
        return isPanchayatCorporationMunicipality;
    }

    public Apeksha isPanchayatCorporationMunicipality(String isPanchayatCorporationMunicipality) {
        this.isPanchayatCorporationMunicipality = isPanchayatCorporationMunicipality;
        return this;
    }

    public void setIsPanchayatCorporationMunicipality(String isPanchayatCorporationMunicipality) {
        this.isPanchayatCorporationMunicipality = isPanchayatCorporationMunicipality;
    }

    public String getNomineePlace() {
        return nomineePlace;
    }

    public Apeksha nomineePlace(String nomineePlace) {
        this.nomineePlace = nomineePlace;
        return this;
    }

    public void setNomineePlace(String nomineePlace) {
        this.nomineePlace = nomineePlace;
    }

    public String getNomineePanchayatCorporationMunicipality() {
        return nomineePanchayatCorporationMunicipality;
    }

    public Apeksha nomineePanchayatCorporationMunicipality(String nomineePanchayatCorporationMunicipality) {
        this.nomineePanchayatCorporationMunicipality = nomineePanchayatCorporationMunicipality;
        return this;
    }

    public void setNomineePanchayatCorporationMunicipality(String nomineePanchayatCorporationMunicipality) {
        this.nomineePanchayatCorporationMunicipality = nomineePanchayatCorporationMunicipality;
    }

    public String getApplicantExtraField1() {
        return applicantExtraField1;
    }

    public Apeksha applicantExtraField1(String applicantExtraField1) {
        this.applicantExtraField1 = applicantExtraField1;
        return this;
    }

    public void setApplicantExtraField1(String applicantExtraField1) {
        this.applicantExtraField1 = applicantExtraField1;
    }

    public String getApplicantExtraField2() {
        return applicantExtraField2;
    }

    public Apeksha applicantExtraField2(String applicantExtraField2) {
        this.applicantExtraField2 = applicantExtraField2;
        return this;
    }

    public void setApplicantExtraField2(String applicantExtraField2) {
        this.applicantExtraField2 = applicantExtraField2;
    }

    public String getApplicantExtraField3() {
        return applicantExtraField3;
    }

    public Apeksha applicantExtraField3(String applicantExtraField3) {
        this.applicantExtraField3 = applicantExtraField3;
        return this;
    }

    public void setApplicantExtraField3(String applicantExtraField3) {
        this.applicantExtraField3 = applicantExtraField3;
    }

    public String getBenefieciaryExtraField1() {
        return benefieciaryExtraField1;
    }

    public Apeksha benefieciaryExtraField1(String benefieciaryExtraField1) {
        this.benefieciaryExtraField1 = benefieciaryExtraField1;
        return this;
    }

    public void setBenefieciaryExtraField1(String benefieciaryExtraField1) {
        this.benefieciaryExtraField1 = benefieciaryExtraField1;
    }

    public String getGeneralPurposeExtraField1() {
        return generalPurposeExtraField1;
    }

    public Apeksha generalPurposeExtraField1(String generalPurposeExtraField1) {
        this.generalPurposeExtraField1 = generalPurposeExtraField1;
        return this;
    }

    public void setGeneralPurposeExtraField1(String generalPurposeExtraField1) {
        this.generalPurposeExtraField1 = generalPurposeExtraField1;
    }

    public String getGeneralPurposeExtraField2() {
        return generalPurposeExtraField2;
    }

    public Apeksha generalPurposeExtraField2(String generalPurposeExtraField2) {
        this.generalPurposeExtraField2 = generalPurposeExtraField2;
        return this;
    }

    public void setGeneralPurposeExtraField2(String generalPurposeExtraField2) {
        this.generalPurposeExtraField2 = generalPurposeExtraField2;
    }

    public String getGeneralPurposeExtraField3() {
        return generalPurposeExtraField3;
    }

    public Apeksha generalPurposeExtraField3(String generalPurposeExtraField3) {
        this.generalPurposeExtraField3 = generalPurposeExtraField3;
        return this;
    }

    public void setGeneralPurposeExtraField3(String generalPurposeExtraField3) {
        this.generalPurposeExtraField3 = generalPurposeExtraField3;
    }   

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Apeksha apeksha = (Apeksha) o;
        if (apeksha.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), apeksha.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Apeksha{" +
            "id=" + getId() +
            ", applicationNumber='" + getApplicationNumber() + "'" +
            ", beneficiaryName='" + getBeneficiaryName() + "'" +
            ", district='" + getDistrict() + "'" +
            ", gender='" + getGender() + "'" +
            ", fathersName='" + getFathersName() + "'" +
            ", age='" + getAge() + "'" +
            ", dateOfBirth='" + getDateOfBirth() + "'" +
            ", aadharNumber='" + getAadharNumber() + "'" +
            ", rationCardNumber='" + getRationCardNumber() + "'" +
            ", rationCardCategory='" + getRationCardCategory() + "'" +
            ", caste='" + getCaste() + "'" +
            ", religion='" + getReligion() + "'" +
            ", houseName='" + getHouseName() + "'" +
            ", houseNumber='" + getHouseNumber() + "'" +
            ", tcNumber='" + getTcNumber() + "'" +
            ", village='" + getVillage() + "'" +
            ", taluk='" + getTaluk() + "'" +
            ", panchayat='" + getPanchayat() + "'" +
            ", postOffice='" + getPostOffice() + "'" +
            ", pinCode='" + getPinCode() + "'" +
            ", mobileNumber='" + getMobileNumber() + "'" +
            ", landLineWithSTD='" + getLandLineWithSTD() + "'" +
            ", occupation='" + getOccupation() + "'" +
            ", annualIncome='" + getAnnualIncome() + "'" +
            ", familyDetails='" + getFamilyDetails() + "'" +
            ", landTotalCent='" + getLandTotalCent() + "'" +
            ", landThaluk='" + getLandThaluk() + "'" +
            ", landVillage='" + getLandVillage() + "'" +
            ", landDistrict='" + getLandDistrict() + "'" +
            ", requirementPurpose='" + getRequirementPurpose() + "'" +
            ", recommendationMinister='" + getRecommendationMinister() + "'" +
            ", recommendationMLA='" + getRecommendationMLA() + "'" +
            ", recommendationMP='" + getRecommendationMP() + "'" +
            ", recommendationOthers='" + getRecommendationOthers() + "'" +
            ", hospitalName='" + getHospitalName() + "'" +
            ", treatmentHistory='" + getTreatmentHistory() + "'" +
            ", expectedAmount='" + getExpectedAmount() + "'" +
            ", anyAmountReceivingFromGovt='" + getAnyAmountReceivingFromGovt() + "'" +
            ", govtAmountPurposeDetails='" + getGovtAmountPurposeDetails() + "'" +
            ", bankName='" + getBankName() + "'" +
            ", bankBranchName='" + getBankBranchName() + "'" +
            ", bankAccountNumber='" + getBankAccountNumber() + "'" +
            ", bankIfscCode='" + getBankIfscCode() + "'" +
            ", additionalDocuments='" + getAdditionalDocuments() + "'" +
            ", additionalDocumentsContentType='" + additionalDocumentsContentType + "'" +
            ", remarks='" + getRemarks() + "'" +
            ", dateOfApplcation='" + getDateOfApplcation() + "'" +
            ", nomineeAvailable='" + getNomineeAvailable() + "'" +
            ", nomineeName='" + getNomineeName() + "'" +
            ", nomineeGender='" + getNomineeGender() + "'" +
            ", nomineeAge='" + getNomineeAge() + "'" +
            ", nomineeRelationship='" + getNomineeRelationship() + "'" +
            ", nomineeHouseName='" + getNomineeHouseName() + "'" +
            ", nomineeHouseNumber='" + getNomineeHouseNumber() + "'" +
            ", nomineeTcNo='" + getNomineeTcNo() + "'" +
            ", nomineeVillage='" + getNomineeVillage() + "'" +
            ", nomineeThaluk='" + getNomineeThaluk() + "'" +
            ", nomineePanchayat='" + getNomineePanchayat() + "'" +
            ", nomineePostOffice='" + getNomineePostOffice() + "'" +
            ", nomineePinCode='" + getNomineePinCode() + "'" +
            ", nomineeMobileNumber='" + getNomineeMobileNumber() + "'" +
            ", nomineeLandLineWithSTD='" + getNomineeLandLineWithSTD() + "'" +
            ", nomineeBankName='" + getNomineeBankName() + "'" +
            ", nomineeBankBranch='" + getNomineeBankBranch() + "'" +
            ", nomineeBankAccountNumber='" + getNomineeBankAccountNumber() + "'" +
            ", nomineeBankIfscCode='" + getNomineeBankIfscCode() + "'" +
            ", photo='" + getPhoto() + "'" +
            ", photoContentType='" + photoContentType + "'" +
            ", applicationForm='" + getApplicationForm() + "'" +
            ", applicationFormContentType='" + applicationFormContentType + "'" +
            ", aadharCard='" + getAadharCard() + "'" +
            ", aadharCardContentType='" + aadharCardContentType + "'" +
            ", rationCard='" + getRationCard() + "'" +
            ", rationCardContentType='" + rationCardContentType + "'" +
            ", doctorReport='" + getDoctorReport() + "'" +
            ", doctorReportContentType='" + doctorReportContentType + "'" +
            ", bankPassbookFrontPage='" + getBankPassbookFrontPage() + "'" +
            ", bankPassbookFrontPageContentType='" + bankPassbookFrontPageContentType + "'" +
            ", nomineePhoto='" + getNomineePhoto() + "'" +
            ", nomineePhotoContentType='" + nomineePhotoContentType + "'" +
            ", nomineeAadharCardRationCard='" + getNomineeAadharCardRationCard() + "'" +
            ", nomineeAadharCardRationCardContentType='" + nomineeAadharCardRationCardContentType + "'" +
            ", nomineeRelationShipProof='" + getNomineeRelationShipProof() + "'" +
            ", nomineeRelationShipProofContentType='" + nomineeRelationShipProofContentType + "'" +
            ", nomineeBankPassbookFrontPage='" + getNomineeBankPassbookFrontPage() + "'" +
            ", nomineeBankPassbookFrontPageContentType='" + nomineeBankPassbookFrontPageContentType + "'" +
            ", isApplicantDifferentFromBenefeciary='" + getIsApplicantDifferentFromBenefeciary() + "'" +
            ", votersCardNumber='" + getVotersCardNumber() + "'" +
            ", applicantPlace='" + getApplicantPlace() + "'" +
            ", onBehalfApplicantName='" + getOnBehalfApplicantName() + "'" +
            ", onBehalfApplicantIDProof='" + getOnBehalfApplicantIDProof() + "'" +
            ", onBehalfApplicantIdProofNumber='" + getOnBehalfApplicantIdProofNumber() + "'" +
            ", onBehalfApplicantRelationship='" + getOnBehalfApplicantRelationship() + "'" +
            ", onBehalfApplicantMobileNumber='" + getOnBehalfApplicantMobileNumber() + "'" +
            ", benefieciaryHasOwnProperty='" + getBenefieciaryHasOwnProperty() + "'" +
            ", hasRecommendation='" + getHasRecommendation() + "'" +
            ", isRecommendationFromChiefMinister='" + getIsRecommendationFromChiefMinister() + "'" +
            ", isAnyAmountReceivingFromGovt='" + getIsAnyAmountReceivingFromGovt() + "'" +
            ", isNomineeAvailable='" + getIsNomineeAvailable() + "'" +
            ", isPanchayatCorporationMunicipality='" + getIsPanchayatCorporationMunicipality() + "'" +
            ", nomineePlace='" + getNomineePlace() + "'" +
            ", nomineePanchayatCorporationMunicipality='" + getNomineePanchayatCorporationMunicipality() + "'" +
            ", applicantExtraField1='" + getApplicantExtraField1() + "'" +
            ", applicantExtraField2='" + getApplicantExtraField2() + "'" +
            ", applicantExtraField3='" + getApplicantExtraField3() + "'" +
            ", benefieciaryExtraField1='" + getBenefieciaryExtraField1() + "'" +
            ", generalPurposeExtraField1='" + getGeneralPurposeExtraField1() + "'" +
            ", generalPurposeExtraField2='" + getGeneralPurposeExtraField2() + "'" +
            ", generalPurposeExtraField3='" + getGeneralPurposeExtraField3() + "'" +            
            "}";
    }
}
