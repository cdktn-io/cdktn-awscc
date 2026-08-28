// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcModelPackageProps extends cdktn.TerraformMetaArguments {
    /**
    * An array of additional Inference Specification objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#additional_inference_specifications CcModelPackage#additional_inference_specifications}
    */
    readonly additionalInferenceSpecifications?: CcModelPackage.AdditionalInferenceSpecificationDefinitionProperty[] | cdktn.IResolvable;
    /**
    * An array of additional Inference Specification objects.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#additional_inference_specifications_to_add CcModelPackage#additional_inference_specifications_to_add}
    */
    readonly additionalInferenceSpecificationsToAdd?: CcModelPackage.AdditionalInferenceSpecificationsToAddProperty[] | cdktn.IResolvable;
    /**
    * A description provided for the model approval.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#approval_description CcModelPackage#approval_description}
    */
    readonly approvalDescription?: string;
    /**
    * Whether to certify the model package for listing on AWS Marketplace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#certify_for_marketplace CcModelPackage#certify_for_marketplace}
    */
    readonly certifyForMarketplace?: boolean | cdktn.IResolvable;
    /**
    * A unique token that guarantees that the call to this API is idempotent.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#client_token CcModelPackage#client_token}
    */
    readonly clientToken?: string;
    /**
    * The metadata properties associated with the model package versions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#customer_metadata_properties CcModelPackage#customer_metadata_properties}
    */
    readonly customerMetadataProperties?: { [key: string]: string };
    /**
    * The machine learning domain of the model package you specified.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#domain CcModelPackage#domain}
    */
    readonly domain?: string;
    /**
    * Represents the drift check baselines that can be used when the model monitor is set using the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#drift_check_baselines CcModelPackage#drift_check_baselines}
    */
    readonly driftCheckBaselines?: CcModelPackage.DriftCheckBaselinesProperty;
    /**
    * Details about inference jobs that can be run with models based on this model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#inference_specification CcModelPackage#inference_specification}
    */
    readonly inferenceSpecification?: CcModelPackage.InferenceSpecificationProperty;
    /**
    * Metadata properties of the tracking entity, trial, or trial component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#metadata_properties CcModelPackage#metadata_properties}
    */
    readonly metadataProperties?: CcModelPackage.MetadataPropertiesProperty;
    /**
    * The approval status of the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_approval_status CcModelPackage#model_approval_status}
    */
    readonly modelApprovalStatus?: string;
    /**
    * The model card associated with the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_card CcModelPackage#model_card}
    */
    readonly modelCard?: CcModelPackage.ModelCardProperty;
    /**
    * A structure that contains model metrics reports.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_metrics CcModelPackage#model_metrics}
    */
    readonly modelMetrics?: CcModelPackage.ModelMetricsProperty;
    /**
    * The description of the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_package_description CcModelPackage#model_package_description}
    */
    readonly modelPackageDescription?: string;
    /**
    * The name of the model package group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_package_group_name CcModelPackage#model_package_group_name}
    */
    readonly modelPackageGroupName?: string;
    /**
    * The name or arn of the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_package_name CcModelPackage#model_package_name}
    */
    readonly modelPackageName?: string;
    /**
    * Details about the current status of the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_package_status_details CcModelPackage#model_package_status_details}
    */
    readonly modelPackageStatusDetails?: CcModelPackage.ModelPackageStatusDetailsProperty;
    /**
    * The version of the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_package_version CcModelPackage#model_package_version}
    */
    readonly modelPackageVersion?: number;
    /**
    * The Amazon Simple Storage Service (Amazon S3) path where the sample payload are stored pointing to single gzip compressed tar archive.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#sample_payload_url CcModelPackage#sample_payload_url}
    */
    readonly samplePayloadUrl?: string;
    /**
    * An optional AWS Key Management Service key to encrypt, decrypt, and re-encrypt model package information for regulated workloads with highly sensitive data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#security_config CcModelPackage#security_config}
    */
    readonly securityConfig?: CcModelPackage.SecurityConfigProperty;
    /**
    * Indicates if you want to skip model validation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#skip_model_validation CcModelPackage#skip_model_validation}
    */
    readonly skipModelValidation?: string;
    /**
    * Details about the algorithm that was used to create the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#source_algorithm_specification CcModelPackage#source_algorithm_specification}
    */
    readonly sourceAlgorithmSpecification?: CcModelPackage.SourceAlgorithmSpecificationProperty;
    /**
    * The URI of the source for the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#source_uri CcModelPackage#source_uri}
    */
    readonly sourceUri?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#tags CcModelPackage#tags}
    */
    readonly tags?: CcModelPackage.TagProperty[] | cdktn.IResolvable;
    /**
    * The machine learning task your model package accomplishes.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#task CcModelPackage#task}
    */
    readonly task?: string;
    /**
    * Specifies configurations for one or more transform jobs that Amazon SageMaker runs to test the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#validation_specification CcModelPackage#validation_specification}
    */
    readonly validationSpecification?: CcModelPackage.ValidationSpecificationProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package awscc_sagemaker_model_package}
*/
export class CcModelPackage extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_sagemaker_model_package";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcModelPackage resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcModelPackage to import
    * @param importFromId The id of the existing CcModelPackage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcModelPackage to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_sagemaker_model_package", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package awscc_sagemaker_model_package} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcModelPackageProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcModelPackageProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_sagemaker_model_package',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.98.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._additionalInferenceSpecifications.internalValue = config.additionalInferenceSpecifications;
        this._additionalInferenceSpecificationsToAdd.internalValue = config.additionalInferenceSpecificationsToAdd;
        this._approvalDescription = config.approvalDescription;
        this._certifyForMarketplace = config.certifyForMarketplace;
        this._clientToken = config.clientToken;
        this._customerMetadataProperties = config.customerMetadataProperties;
        this._domain = config.domain;
        this._driftCheckBaselines.internalValue = config.driftCheckBaselines;
        this._inferenceSpecification.internalValue = config.inferenceSpecification;
        this._metadataProperties.internalValue = config.metadataProperties;
        this._modelApprovalStatus = config.modelApprovalStatus;
        this._modelCard.internalValue = config.modelCard;
        this._modelMetrics.internalValue = config.modelMetrics;
        this._modelPackageDescription = config.modelPackageDescription;
        this._modelPackageGroupName = config.modelPackageGroupName;
        this._modelPackageName = config.modelPackageName;
        this._modelPackageStatusDetails.internalValue = config.modelPackageStatusDetails;
        this._modelPackageVersion = config.modelPackageVersion;
        this._samplePayloadUrl = config.samplePayloadUrl;
        this._securityConfig.internalValue = config.securityConfig;
        this._skipModelValidation = config.skipModelValidation;
        this._sourceAlgorithmSpecification.internalValue = config.sourceAlgorithmSpecification;
        this._sourceUri = config.sourceUri;
        this._tags.internalValue = config.tags;
        this._task = config.task;
        this._validationSpecification.internalValue = config.validationSpecification;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // additional_inference_specifications - computed: true, optional: true, required: false
    private _additionalInferenceSpecifications = new CcModelPackage.AdditionalInferenceSpecificationDefinitionPropertyList(this, "additional_inference_specifications", false);
    public get additionalInferenceSpecifications() {
        return this._additionalInferenceSpecifications;
    }
    public putAdditionalInferenceSpecifications(value: CcModelPackage.AdditionalInferenceSpecificationDefinitionProperty[] | cdktn.IResolvable) {
        this._additionalInferenceSpecifications.internalValue = value;
    }
    public resetAdditionalInferenceSpecifications() {
        this._additionalInferenceSpecifications.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalInferenceSpecificationsInput() {
        return this._additionalInferenceSpecifications.internalValue;
    }

    // additional_inference_specifications_to_add - computed: true, optional: true, required: false
    private _additionalInferenceSpecificationsToAdd = new CcModelPackage.AdditionalInferenceSpecificationsToAddPropertyList(this, "additional_inference_specifications_to_add", false);
    public get additionalInferenceSpecificationsToAdd() {
        return this._additionalInferenceSpecificationsToAdd;
    }
    public putAdditionalInferenceSpecificationsToAdd(value: CcModelPackage.AdditionalInferenceSpecificationsToAddProperty[] | cdktn.IResolvable) {
        this._additionalInferenceSpecificationsToAdd.internalValue = value;
    }
    public resetAdditionalInferenceSpecificationsToAdd() {
        this._additionalInferenceSpecificationsToAdd.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get additionalInferenceSpecificationsToAddInput() {
        return this._additionalInferenceSpecificationsToAdd.internalValue;
    }

    // approval_description - computed: true, optional: true, required: false
    private _approvalDescription?: string; 
    public get approvalDescription() {
        return this.getStringAttribute('approval_description');
    }
    public set approvalDescription(value: string) {
        this._approvalDescription = value;
    }
    public resetApprovalDescription() {
        this._approvalDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvalDescriptionInput() {
        return this._approvalDescription;
    }

    // certify_for_marketplace - computed: true, optional: true, required: false
    private _certifyForMarketplace?: boolean | cdktn.IResolvable; 
    public get certifyForMarketplace() {
        return this.getBooleanAttribute('certify_for_marketplace');
    }
    public set certifyForMarketplace(value: boolean | cdktn.IResolvable) {
        this._certifyForMarketplace = value;
    }
    public resetCertifyForMarketplace() {
        this._certifyForMarketplace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certifyForMarketplaceInput() {
        return this._certifyForMarketplace;
    }

    // client_token - computed: true, optional: true, required: false
    private _clientToken?: string; 
    public get clientToken() {
        return this.getStringAttribute('client_token');
    }
    public set clientToken(value: string) {
        this._clientToken = value;
    }
    public resetClientToken() {
        this._clientToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientTokenInput() {
        return this._clientToken;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // customer_metadata_properties - computed: true, optional: true, required: false
    private _customerMetadataProperties?: { [key: string]: string }; 
    public get customerMetadataProperties() {
        return this.getStringMapAttribute('customer_metadata_properties');
    }
    public set customerMetadataProperties(value: { [key: string]: string }) {
        this._customerMetadataProperties = value;
    }
    public resetCustomerMetadataProperties() {
        this._customerMetadataProperties = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customerMetadataPropertiesInput() {
        return this._customerMetadataProperties;
    }

    // domain - computed: true, optional: true, required: false
    private _domain?: string; 
    public get domain() {
        return this.getStringAttribute('domain');
    }
    public set domain(value: string) {
        this._domain = value;
    }
    public resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get domainInput() {
        return this._domain;
    }

    // drift_check_baselines - computed: true, optional: true, required: false
    private _driftCheckBaselines = new CcModelPackage.DriftCheckBaselinesPropertyOutputReference(this, "drift_check_baselines");
    public get driftCheckBaselines() {
        return this._driftCheckBaselines;
    }
    public putDriftCheckBaselines(value: CcModelPackage.DriftCheckBaselinesProperty) {
        this._driftCheckBaselines.internalValue = value;
    }
    public resetDriftCheckBaselines() {
        this._driftCheckBaselines.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get driftCheckBaselinesInput() {
        return this._driftCheckBaselines.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // inference_specification - computed: true, optional: true, required: false
    private _inferenceSpecification = new CcModelPackage.InferenceSpecificationPropertyOutputReference(this, "inference_specification");
    public get inferenceSpecification() {
        return this._inferenceSpecification;
    }
    public putInferenceSpecification(value: CcModelPackage.InferenceSpecificationProperty) {
        this._inferenceSpecification.internalValue = value;
    }
    public resetInferenceSpecification() {
        this._inferenceSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inferenceSpecificationInput() {
        return this._inferenceSpecification.internalValue;
    }

    // last_modified_time - computed: true, optional: false, required: false
    public get lastModifiedTime() {
        return this.getStringAttribute('last_modified_time');
    }

    // metadata_properties - computed: true, optional: true, required: false
    private _metadataProperties = new CcModelPackage.MetadataPropertiesPropertyOutputReference(this, "metadata_properties");
    public get metadataProperties() {
        return this._metadataProperties;
    }
    public putMetadataProperties(value: CcModelPackage.MetadataPropertiesProperty) {
        this._metadataProperties.internalValue = value;
    }
    public resetMetadataProperties() {
        this._metadataProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metadataPropertiesInput() {
        return this._metadataProperties.internalValue;
    }

    // model_approval_status - computed: true, optional: true, required: false
    private _modelApprovalStatus?: string; 
    public get modelApprovalStatus() {
        return this.getStringAttribute('model_approval_status');
    }
    public set modelApprovalStatus(value: string) {
        this._modelApprovalStatus = value;
    }
    public resetModelApprovalStatus() {
        this._modelApprovalStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelApprovalStatusInput() {
        return this._modelApprovalStatus;
    }

    // model_card - computed: true, optional: true, required: false
    private _modelCard = new CcModelPackage.ModelCardPropertyOutputReference(this, "model_card");
    public get modelCard() {
        return this._modelCard;
    }
    public putModelCard(value: CcModelPackage.ModelCardProperty) {
        this._modelCard.internalValue = value;
    }
    public resetModelCard() {
        this._modelCard.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelCardInput() {
        return this._modelCard.internalValue;
    }

    // model_metrics - computed: true, optional: true, required: false
    private _modelMetrics = new CcModelPackage.ModelMetricsPropertyOutputReference(this, "model_metrics");
    public get modelMetrics() {
        return this._modelMetrics;
    }
    public putModelMetrics(value: CcModelPackage.ModelMetricsProperty) {
        this._modelMetrics.internalValue = value;
    }
    public resetModelMetrics() {
        this._modelMetrics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelMetricsInput() {
        return this._modelMetrics.internalValue;
    }

    // model_package_arn - computed: true, optional: false, required: false
    public get modelPackageArn() {
        return this.getStringAttribute('model_package_arn');
    }

    // model_package_description - computed: true, optional: true, required: false
    private _modelPackageDescription?: string; 
    public get modelPackageDescription() {
        return this.getStringAttribute('model_package_description');
    }
    public set modelPackageDescription(value: string) {
        this._modelPackageDescription = value;
    }
    public resetModelPackageDescription() {
        this._modelPackageDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPackageDescriptionInput() {
        return this._modelPackageDescription;
    }

    // model_package_group_name - computed: true, optional: true, required: false
    private _modelPackageGroupName?: string; 
    public get modelPackageGroupName() {
        return this.getStringAttribute('model_package_group_name');
    }
    public set modelPackageGroupName(value: string) {
        this._modelPackageGroupName = value;
    }
    public resetModelPackageGroupName() {
        this._modelPackageGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPackageGroupNameInput() {
        return this._modelPackageGroupName;
    }

    // model_package_name - computed: true, optional: true, required: false
    private _modelPackageName?: string; 
    public get modelPackageName() {
        return this.getStringAttribute('model_package_name');
    }
    public set modelPackageName(value: string) {
        this._modelPackageName = value;
    }
    public resetModelPackageName() {
        this._modelPackageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPackageNameInput() {
        return this._modelPackageName;
    }

    // model_package_status - computed: true, optional: false, required: false
    public get modelPackageStatus() {
        return this.getStringAttribute('model_package_status');
    }

    // model_package_status_details - computed: true, optional: true, required: false
    private _modelPackageStatusDetails = new CcModelPackage.ModelPackageStatusDetailsPropertyOutputReference(this, "model_package_status_details");
    public get modelPackageStatusDetails() {
        return this._modelPackageStatusDetails;
    }
    public putModelPackageStatusDetails(value: CcModelPackage.ModelPackageStatusDetailsProperty) {
        this._modelPackageStatusDetails.internalValue = value;
    }
    public resetModelPackageStatusDetails() {
        this._modelPackageStatusDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPackageStatusDetailsInput() {
        return this._modelPackageStatusDetails.internalValue;
    }

    // model_package_version - computed: true, optional: true, required: false
    private _modelPackageVersion?: number; 
    public get modelPackageVersion() {
        return this.getNumberAttribute('model_package_version');
    }
    public set modelPackageVersion(value: number) {
        this._modelPackageVersion = value;
    }
    public resetModelPackageVersion() {
        this._modelPackageVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelPackageVersionInput() {
        return this._modelPackageVersion;
    }

    // sample_payload_url - computed: true, optional: true, required: false
    private _samplePayloadUrl?: string; 
    public get samplePayloadUrl() {
        return this.getStringAttribute('sample_payload_url');
    }
    public set samplePayloadUrl(value: string) {
        this._samplePayloadUrl = value;
    }
    public resetSamplePayloadUrl() {
        this._samplePayloadUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get samplePayloadUrlInput() {
        return this._samplePayloadUrl;
    }

    // security_config - computed: true, optional: true, required: false
    private _securityConfig = new CcModelPackage.SecurityConfigPropertyOutputReference(this, "security_config");
    public get securityConfig() {
        return this._securityConfig;
    }
    public putSecurityConfig(value: CcModelPackage.SecurityConfigProperty) {
        this._securityConfig.internalValue = value;
    }
    public resetSecurityConfig() {
        this._securityConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityConfigInput() {
        return this._securityConfig.internalValue;
    }

    // skip_model_validation - computed: true, optional: true, required: false
    private _skipModelValidation?: string; 
    public get skipModelValidation() {
        return this.getStringAttribute('skip_model_validation');
    }
    public set skipModelValidation(value: string) {
        this._skipModelValidation = value;
    }
    public resetSkipModelValidation() {
        this._skipModelValidation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get skipModelValidationInput() {
        return this._skipModelValidation;
    }

    // source_algorithm_specification - computed: true, optional: true, required: false
    private _sourceAlgorithmSpecification = new CcModelPackage.SourceAlgorithmSpecificationPropertyOutputReference(this, "source_algorithm_specification");
    public get sourceAlgorithmSpecification() {
        return this._sourceAlgorithmSpecification;
    }
    public putSourceAlgorithmSpecification(value: CcModelPackage.SourceAlgorithmSpecificationProperty) {
        this._sourceAlgorithmSpecification.internalValue = value;
    }
    public resetSourceAlgorithmSpecification() {
        this._sourceAlgorithmSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAlgorithmSpecificationInput() {
        return this._sourceAlgorithmSpecification.internalValue;
    }

    // source_uri - computed: true, optional: true, required: false
    private _sourceUri?: string; 
    public get sourceUri() {
        return this.getStringAttribute('source_uri');
    }
    public set sourceUri(value: string) {
        this._sourceUri = value;
    }
    public resetSourceUri() {
        this._sourceUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceUriInput() {
        return this._sourceUri;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcModelPackage.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcModelPackage.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // task - computed: true, optional: true, required: false
    private _task?: string; 
    public get task() {
        return this.getStringAttribute('task');
    }
    public set task(value: string) {
        this._task = value;
    }
    public resetTask() {
        this._task = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskInput() {
        return this._task;
    }

    // validation_specification - computed: true, optional: true, required: false
    private _validationSpecification = new CcModelPackage.ValidationSpecificationPropertyOutputReference(this, "validation_specification");
    public get validationSpecification() {
        return this._validationSpecification;
    }
    public putValidationSpecification(value: CcModelPackage.ValidationSpecificationProperty) {
        this._validationSpecification.internalValue = value;
    }
    public resetValidationSpecification() {
        this._validationSpecification.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationSpecificationInput() {
        return this._validationSpecification.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            additional_inference_specifications: cdktn.listMapper(ccModelPackageAdditionalInferenceSpecificationDefinitionPropertyToTerraform, false)(this._additionalInferenceSpecifications.internalValue),
            additional_inference_specifications_to_add: cdktn.listMapper(ccModelPackageAdditionalInferenceSpecificationsToAddPropertyToTerraform, false)(this._additionalInferenceSpecificationsToAdd.internalValue),
            approval_description: cdktn.stringToTerraform(this._approvalDescription),
            certify_for_marketplace: cdktn.booleanToTerraform(this._certifyForMarketplace),
            client_token: cdktn.stringToTerraform(this._clientToken),
            customer_metadata_properties: cdktn.hashMapper(cdktn.stringToTerraform)(this._customerMetadataProperties),
            domain: cdktn.stringToTerraform(this._domain),
            drift_check_baselines: ccModelPackageDriftCheckBaselinesPropertyToTerraform(this._driftCheckBaselines.internalValue),
            inference_specification: ccModelPackageInferenceSpecificationPropertyToTerraform(this._inferenceSpecification.internalValue),
            metadata_properties: ccModelPackageMetadataPropertiesPropertyToTerraform(this._metadataProperties.internalValue),
            model_approval_status: cdktn.stringToTerraform(this._modelApprovalStatus),
            model_card: ccModelPackageModelCardPropertyToTerraform(this._modelCard.internalValue),
            model_metrics: ccModelPackageModelMetricsPropertyToTerraform(this._modelMetrics.internalValue),
            model_package_description: cdktn.stringToTerraform(this._modelPackageDescription),
            model_package_group_name: cdktn.stringToTerraform(this._modelPackageGroupName),
            model_package_name: cdktn.stringToTerraform(this._modelPackageName),
            model_package_status_details: ccModelPackageModelPackageStatusDetailsPropertyToTerraform(this._modelPackageStatusDetails.internalValue),
            model_package_version: cdktn.numberToTerraform(this._modelPackageVersion),
            sample_payload_url: cdktn.stringToTerraform(this._samplePayloadUrl),
            security_config: ccModelPackageSecurityConfigPropertyToTerraform(this._securityConfig.internalValue),
            skip_model_validation: cdktn.stringToTerraform(this._skipModelValidation),
            source_algorithm_specification: ccModelPackageSourceAlgorithmSpecificationPropertyToTerraform(this._sourceAlgorithmSpecification.internalValue),
            source_uri: cdktn.stringToTerraform(this._sourceUri),
            tags: cdktn.listMapper(ccModelPackageTagPropertyToTerraform, false)(this._tags.internalValue),
            task: cdktn.stringToTerraform(this._task),
            validation_specification: ccModelPackageValidationSpecificationPropertyToTerraform(this._validationSpecification.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            additional_inference_specifications: {
                value: cdktn.listMapperHcl(ccModelPackageAdditionalInferenceSpecificationDefinitionPropertyToHclTerraform, false)(this._additionalInferenceSpecifications.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcModelPackage.AdditionalInferenceSpecificationDefinitionPropertyList",
            },
            additional_inference_specifications_to_add: {
                value: cdktn.listMapperHcl(ccModelPackageAdditionalInferenceSpecificationsToAddPropertyToHclTerraform, false)(this._additionalInferenceSpecificationsToAdd.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcModelPackage.AdditionalInferenceSpecificationsToAddPropertyList",
            },
            approval_description: {
                value: cdktn.stringToHclTerraform(this._approvalDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            certify_for_marketplace: {
                value: cdktn.booleanToHclTerraform(this._certifyForMarketplace),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            client_token: {
                value: cdktn.stringToHclTerraform(this._clientToken),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            customer_metadata_properties: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._customerMetadataProperties),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            domain: {
                value: cdktn.stringToHclTerraform(this._domain),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            drift_check_baselines: {
                value: ccModelPackageDriftCheckBaselinesPropertyToHclTerraform(this._driftCheckBaselines.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelPackage.DriftCheckBaselinesProperty",
            },
            inference_specification: {
                value: ccModelPackageInferenceSpecificationPropertyToHclTerraform(this._inferenceSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelPackage.InferenceSpecificationProperty",
            },
            metadata_properties: {
                value: ccModelPackageMetadataPropertiesPropertyToHclTerraform(this._metadataProperties.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelPackage.MetadataPropertiesProperty",
            },
            model_approval_status: {
                value: cdktn.stringToHclTerraform(this._modelApprovalStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_card: {
                value: ccModelPackageModelCardPropertyToHclTerraform(this._modelCard.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelPackage.ModelCardProperty",
            },
            model_metrics: {
                value: ccModelPackageModelMetricsPropertyToHclTerraform(this._modelMetrics.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelPackage.ModelMetricsProperty",
            },
            model_package_description: {
                value: cdktn.stringToHclTerraform(this._modelPackageDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_package_group_name: {
                value: cdktn.stringToHclTerraform(this._modelPackageGroupName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_package_name: {
                value: cdktn.stringToHclTerraform(this._modelPackageName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            model_package_status_details: {
                value: ccModelPackageModelPackageStatusDetailsPropertyToHclTerraform(this._modelPackageStatusDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelPackage.ModelPackageStatusDetailsProperty",
            },
            model_package_version: {
                value: cdktn.numberToHclTerraform(this._modelPackageVersion),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            sample_payload_url: {
                value: cdktn.stringToHclTerraform(this._samplePayloadUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            security_config: {
                value: ccModelPackageSecurityConfigPropertyToHclTerraform(this._securityConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelPackage.SecurityConfigProperty",
            },
            skip_model_validation: {
                value: cdktn.stringToHclTerraform(this._skipModelValidation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            source_algorithm_specification: {
                value: ccModelPackageSourceAlgorithmSpecificationPropertyToHclTerraform(this._sourceAlgorithmSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelPackage.SourceAlgorithmSpecificationProperty",
            },
            source_uri: {
                value: cdktn.stringToHclTerraform(this._sourceUri),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccModelPackageTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcModelPackage.TagPropertyList",
            },
            task: {
                value: cdktn.stringToHclTerraform(this._task),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            validation_specification: {
                value: ccModelPackageValidationSpecificationPropertyToHclTerraform(this._validationSpecification.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcModelPackage.ValidationSpecificationProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccModelPackageModelAccessConfigPropertyToTerraform(struct?: CcModelPackage.ModelAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
    }
}


export function ccModelPackageModelAccessConfigPropertyToHclTerraform(struct?: CcModelPackage.ModelAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accept_eula: {
            value: cdktn.booleanToHclTerraform(struct!.acceptEula),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageS3ModelDataSourcePropertyToTerraform(struct?: CcModelPackage.S3ModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        model_access_config: ccModelPackageModelAccessConfigPropertyToTerraform(struct!.modelAccessConfig),
        s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageS3ModelDataSourcePropertyToHclTerraform(struct?: CcModelPackage.S3ModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_access_config: {
            value: ccModelPackageModelAccessConfigPropertyToHclTerraform(struct!.modelAccessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelAccessConfigProperty",
        },
        s3_data_type: {
            value: cdktn.stringToHclTerraform(struct!.s3DataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelDataSourcePropertyToTerraform(struct?: CcModelPackage.ModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_data_source: ccModelPackageS3ModelDataSourcePropertyToTerraform(struct!.s3DataSource),
    }
}


export function ccModelPackageModelDataSourcePropertyToHclTerraform(struct?: CcModelPackage.ModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_data_source: {
            value: ccModelPackageS3ModelDataSourcePropertyToHclTerraform(struct!.s3DataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "S3ModelDataSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelInputPropertyToTerraform(struct?: CcModelPackage.ModelInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_input_config: cdktn.stringToTerraform(struct!.dataInputConfig),
    }
}


export function ccModelPackageModelInputPropertyToHclTerraform(struct?: CcModelPackage.ModelInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_input_config: {
            value: cdktn.stringToHclTerraform(struct!.dataInputConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelPackageContainerDefinitionPropertyToTerraform(struct?: CcModelPackage.ModelPackageContainerDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_hostname: cdktn.stringToTerraform(struct!.containerHostname),
        environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
        framework: cdktn.stringToTerraform(struct!.framework),
        framework_version: cdktn.stringToTerraform(struct!.frameworkVersion),
        image: cdktn.stringToTerraform(struct!.image),
        image_digest: cdktn.stringToTerraform(struct!.imageDigest),
        model_data_source: ccModelPackageModelDataSourcePropertyToTerraform(struct!.modelDataSource),
        model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
        model_input: ccModelPackageModelInputPropertyToTerraform(struct!.modelInput),
        nearest_model_name: cdktn.stringToTerraform(struct!.nearestModelName),
    }
}


export function ccModelPackageModelPackageContainerDefinitionPropertyToHclTerraform(struct?: CcModelPackage.ModelPackageContainerDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_hostname: {
            value: cdktn.stringToHclTerraform(struct!.containerHostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        framework: {
            value: cdktn.stringToHclTerraform(struct!.framework),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        framework_version: {
            value: cdktn.stringToHclTerraform(struct!.frameworkVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_digest: {
            value: cdktn.stringToHclTerraform(struct!.imageDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_data_source: {
            value: ccModelPackageModelDataSourcePropertyToHclTerraform(struct!.modelDataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelDataSourceProperty",
        },
        model_data_url: {
            value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_input: {
            value: ccModelPackageModelInputPropertyToHclTerraform(struct!.modelInput),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelInputProperty",
        },
        nearest_model_name: {
            value: cdktn.stringToHclTerraform(struct!.nearestModelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageAdditionalInferenceSpecificationDefinitionPropertyToTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        containers: cdktn.listMapper(ccModelPackageModelPackageContainerDefinitionPropertyToTerraform, false)(struct!.containers),
        description: cdktn.stringToTerraform(struct!.description),
        name: cdktn.stringToTerraform(struct!.name),
        supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
        supported_realtime_inference_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
        supported_response_mime_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
        supported_transform_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
    }
}


export function ccModelPackageAdditionalInferenceSpecificationDefinitionPropertyToHclTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        containers: {
            value: cdktn.listMapperHcl(ccModelPackageModelPackageContainerDefinitionPropertyToHclTerraform, false)(struct!.containers),
            isBlock: true,
            type: "list",
            storageClassType: "ModelPackageContainerDefinitionPropertyList",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        supported_content_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedContentTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_realtime_inference_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_response_mime_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedResponseMimeTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_transform_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedTransformInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
    }
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accept_eula: {
            value: cdktn.booleanToHclTerraform(struct!.acceptEula),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourcePropertyToTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        model_access_config: ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct!.modelAccessConfig),
        s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourcePropertyToHclTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_access_config: {
            value: ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct!.modelAccessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigProperty",
        },
        s3_data_type: {
            value: cdktn.stringToHclTerraform(struct!.s3DataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourcePropertyToTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddContainersModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_data_source: ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourcePropertyToTerraform(struct!.s3DataSource),
    }
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourcePropertyToHclTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddContainersModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_data_source: {
            value: ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourcePropertyToHclTerraform(struct!.s3DataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputPropertyToTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddContainersModelInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_input_config: cdktn.stringToTerraform(struct!.dataInputConfig),
    }
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputPropertyToHclTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddContainersModelInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_input_config: {
            value: cdktn.stringToHclTerraform(struct!.dataInputConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddContainersPropertyToTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddContainersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_hostname: cdktn.stringToTerraform(struct!.containerHostname),
        environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
        framework: cdktn.stringToTerraform(struct!.framework),
        framework_version: cdktn.stringToTerraform(struct!.frameworkVersion),
        image: cdktn.stringToTerraform(struct!.image),
        image_digest: cdktn.stringToTerraform(struct!.imageDigest),
        model_data_source: ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourcePropertyToTerraform(struct!.modelDataSource),
        model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
        model_input: ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputPropertyToTerraform(struct!.modelInput),
        nearest_model_name: cdktn.stringToTerraform(struct!.nearestModelName),
    }
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddContainersPropertyToHclTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddContainersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_hostname: {
            value: cdktn.stringToHclTerraform(struct!.containerHostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        framework: {
            value: cdktn.stringToHclTerraform(struct!.framework),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        framework_version: {
            value: cdktn.stringToHclTerraform(struct!.frameworkVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_digest: {
            value: cdktn.stringToHclTerraform(struct!.imageDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_data_source: {
            value: ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelDataSourcePropertyToHclTerraform(struct!.modelDataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "AdditionalInferenceSpecificationsToAddContainersModelDataSourceProperty",
        },
        model_data_url: {
            value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_input: {
            value: ccModelPackageAdditionalInferenceSpecificationsToAddContainersModelInputPropertyToHclTerraform(struct!.modelInput),
            isBlock: true,
            type: "struct",
            storageClassType: "AdditionalInferenceSpecificationsToAddContainersModelInputProperty",
        },
        nearest_model_name: {
            value: cdktn.stringToHclTerraform(struct!.nearestModelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddPropertyToTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        containers: cdktn.listMapper(ccModelPackageAdditionalInferenceSpecificationsToAddContainersPropertyToTerraform, false)(struct!.containers),
        description: cdktn.stringToTerraform(struct!.description),
        name: cdktn.stringToTerraform(struct!.name),
        supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
        supported_realtime_inference_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
        supported_response_mime_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
        supported_transform_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
    }
}


export function ccModelPackageAdditionalInferenceSpecificationsToAddPropertyToHclTerraform(struct?: CcModelPackage.AdditionalInferenceSpecificationsToAddProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        containers: {
            value: cdktn.listMapperHcl(ccModelPackageAdditionalInferenceSpecificationsToAddContainersPropertyToHclTerraform, false)(struct!.containers),
            isBlock: true,
            type: "list",
            storageClassType: "AdditionalInferenceSpecificationsToAddContainersPropertyList",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        supported_content_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedContentTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_realtime_inference_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_response_mime_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedResponseMimeTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_transform_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedTransformInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageFileSourcePropertyToTerraform(struct?: CcModelPackage.FileSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageFileSourcePropertyToHclTerraform(struct?: CcModelPackage.FileSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageMetricsSourcePropertyToTerraform(struct?: CcModelPackage.MetricsSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageMetricsSourcePropertyToHclTerraform(struct?: CcModelPackage.MetricsSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackagePreTrainingConstraintsPropertyToTerraform(struct?: CcModelPackage.PreTrainingConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackagePreTrainingConstraintsPropertyToHclTerraform(struct?: CcModelPackage.PreTrainingConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDriftCheckBiasPropertyToTerraform(struct?: CcModelPackage.DriftCheckBiasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        config_file: ccModelPackageFileSourcePropertyToTerraform(struct!.configFile),
        post_training_constraints: ccModelPackageMetricsSourcePropertyToTerraform(struct!.postTrainingConstraints),
        pre_training_constraints: ccModelPackagePreTrainingConstraintsPropertyToTerraform(struct!.preTrainingConstraints),
    }
}


export function ccModelPackageDriftCheckBiasPropertyToHclTerraform(struct?: CcModelPackage.DriftCheckBiasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        config_file: {
            value: ccModelPackageFileSourcePropertyToHclTerraform(struct!.configFile),
            isBlock: true,
            type: "struct",
            storageClassType: "FileSourceProperty",
        },
        post_training_constraints: {
            value: ccModelPackageMetricsSourcePropertyToHclTerraform(struct!.postTrainingConstraints),
            isBlock: true,
            type: "struct",
            storageClassType: "MetricsSourceProperty",
        },
        pre_training_constraints: {
            value: ccModelPackagePreTrainingConstraintsPropertyToHclTerraform(struct!.preTrainingConstraints),
            isBlock: true,
            type: "struct",
            storageClassType: "PreTrainingConstraintsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageConfigFilePropertyToTerraform(struct?: CcModelPackage.ConfigFileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageConfigFilePropertyToHclTerraform(struct?: CcModelPackage.ConfigFileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDriftCheckBaselinesExplainabilityConstraintsPropertyToTerraform(struct?: CcModelPackage.DriftCheckBaselinesExplainabilityConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageDriftCheckBaselinesExplainabilityConstraintsPropertyToHclTerraform(struct?: CcModelPackage.DriftCheckBaselinesExplainabilityConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDriftCheckExplainabilityPropertyToTerraform(struct?: CcModelPackage.DriftCheckExplainabilityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        config_file: ccModelPackageConfigFilePropertyToTerraform(struct!.configFile),
        constraints: ccModelPackageDriftCheckBaselinesExplainabilityConstraintsPropertyToTerraform(struct!.constraints),
    }
}


export function ccModelPackageDriftCheckExplainabilityPropertyToHclTerraform(struct?: CcModelPackage.DriftCheckExplainabilityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        config_file: {
            value: ccModelPackageConfigFilePropertyToHclTerraform(struct!.configFile),
            isBlock: true,
            type: "struct",
            storageClassType: "ConfigFileProperty",
        },
        constraints: {
            value: ccModelPackageDriftCheckBaselinesExplainabilityConstraintsPropertyToHclTerraform(struct!.constraints),
            isBlock: true,
            type: "struct",
            storageClassType: "DriftCheckBaselinesExplainabilityConstraintsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDriftCheckBaselinesModelDataQualityConstraintsPropertyToTerraform(struct?: CcModelPackage.DriftCheckBaselinesModelDataQualityConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageDriftCheckBaselinesModelDataQualityConstraintsPropertyToHclTerraform(struct?: CcModelPackage.DriftCheckBaselinesModelDataQualityConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDriftCheckBaselinesModelDataQualityStatisticsPropertyToTerraform(struct?: CcModelPackage.DriftCheckBaselinesModelDataQualityStatisticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageDriftCheckBaselinesModelDataQualityStatisticsPropertyToHclTerraform(struct?: CcModelPackage.DriftCheckBaselinesModelDataQualityStatisticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDriftCheckModelDataQualityPropertyToTerraform(struct?: CcModelPackage.DriftCheckModelDataQualityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraints: ccModelPackageDriftCheckBaselinesModelDataQualityConstraintsPropertyToTerraform(struct!.constraints),
        statistics: ccModelPackageDriftCheckBaselinesModelDataQualityStatisticsPropertyToTerraform(struct!.statistics),
    }
}


export function ccModelPackageDriftCheckModelDataQualityPropertyToHclTerraform(struct?: CcModelPackage.DriftCheckModelDataQualityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraints: {
            value: ccModelPackageDriftCheckBaselinesModelDataQualityConstraintsPropertyToHclTerraform(struct!.constraints),
            isBlock: true,
            type: "struct",
            storageClassType: "DriftCheckBaselinesModelDataQualityConstraintsProperty",
        },
        statistics: {
            value: ccModelPackageDriftCheckBaselinesModelDataQualityStatisticsPropertyToHclTerraform(struct!.statistics),
            isBlock: true,
            type: "struct",
            storageClassType: "DriftCheckBaselinesModelDataQualityStatisticsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDriftCheckBaselinesModelQualityConstraintsPropertyToTerraform(struct?: CcModelPackage.DriftCheckBaselinesModelQualityConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageDriftCheckBaselinesModelQualityConstraintsPropertyToHclTerraform(struct?: CcModelPackage.DriftCheckBaselinesModelQualityConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDriftCheckBaselinesModelQualityStatisticsPropertyToTerraform(struct?: CcModelPackage.DriftCheckBaselinesModelQualityStatisticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageDriftCheckBaselinesModelQualityStatisticsPropertyToHclTerraform(struct?: CcModelPackage.DriftCheckBaselinesModelQualityStatisticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDriftCheckModelQualityPropertyToTerraform(struct?: CcModelPackage.DriftCheckModelQualityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraints: ccModelPackageDriftCheckBaselinesModelQualityConstraintsPropertyToTerraform(struct!.constraints),
        statistics: ccModelPackageDriftCheckBaselinesModelQualityStatisticsPropertyToTerraform(struct!.statistics),
    }
}


export function ccModelPackageDriftCheckModelQualityPropertyToHclTerraform(struct?: CcModelPackage.DriftCheckModelQualityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraints: {
            value: ccModelPackageDriftCheckBaselinesModelQualityConstraintsPropertyToHclTerraform(struct!.constraints),
            isBlock: true,
            type: "struct",
            storageClassType: "DriftCheckBaselinesModelQualityConstraintsProperty",
        },
        statistics: {
            value: ccModelPackageDriftCheckBaselinesModelQualityStatisticsPropertyToHclTerraform(struct!.statistics),
            isBlock: true,
            type: "struct",
            storageClassType: "DriftCheckBaselinesModelQualityStatisticsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDriftCheckBaselinesPropertyToTerraform(struct?: CcModelPackage.DriftCheckBaselinesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bias: ccModelPackageDriftCheckBiasPropertyToTerraform(struct!.bias),
        explainability: ccModelPackageDriftCheckExplainabilityPropertyToTerraform(struct!.explainability),
        model_data_quality: ccModelPackageDriftCheckModelDataQualityPropertyToTerraform(struct!.modelDataQuality),
        model_quality: ccModelPackageDriftCheckModelQualityPropertyToTerraform(struct!.modelQuality),
    }
}


export function ccModelPackageDriftCheckBaselinesPropertyToHclTerraform(struct?: CcModelPackage.DriftCheckBaselinesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bias: {
            value: ccModelPackageDriftCheckBiasPropertyToHclTerraform(struct!.bias),
            isBlock: true,
            type: "struct",
            storageClassType: "DriftCheckBiasProperty",
        },
        explainability: {
            value: ccModelPackageDriftCheckExplainabilityPropertyToHclTerraform(struct!.explainability),
            isBlock: true,
            type: "struct",
            storageClassType: "DriftCheckExplainabilityProperty",
        },
        model_data_quality: {
            value: ccModelPackageDriftCheckModelDataQualityPropertyToHclTerraform(struct!.modelDataQuality),
            isBlock: true,
            type: "struct",
            storageClassType: "DriftCheckModelDataQualityProperty",
        },
        model_quality: {
            value: ccModelPackageDriftCheckModelQualityPropertyToHclTerraform(struct!.modelQuality),
            isBlock: true,
            type: "struct",
            storageClassType: "DriftCheckModelQualityProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct?: CcModelPackage.InferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accept_eula: cdktn.booleanToTerraform(struct!.acceptEula),
    }
}


export function ccModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct?: CcModelPackage.InferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accept_eula: {
            value: cdktn.booleanToHclTerraform(struct!.acceptEula),
            isBlock: false,
            type: "simple",
            storageClassType: "boolean",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourcePropertyToTerraform(struct?: CcModelPackage.InferenceSpecificationContainersModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        model_access_config: ccModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigPropertyToTerraform(struct!.modelAccessConfig),
        s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourcePropertyToHclTerraform(struct?: CcModelPackage.InferenceSpecificationContainersModelDataSourceS3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_access_config: {
            value: ccModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigPropertyToHclTerraform(struct!.modelAccessConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigProperty",
        },
        s3_data_type: {
            value: cdktn.stringToHclTerraform(struct!.s3DataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageInferenceSpecificationContainersModelDataSourcePropertyToTerraform(struct?: CcModelPackage.InferenceSpecificationContainersModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_data_source: ccModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourcePropertyToTerraform(struct!.s3DataSource),
    }
}


export function ccModelPackageInferenceSpecificationContainersModelDataSourcePropertyToHclTerraform(struct?: CcModelPackage.InferenceSpecificationContainersModelDataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_data_source: {
            value: ccModelPackageInferenceSpecificationContainersModelDataSourceS3DataSourcePropertyToHclTerraform(struct!.s3DataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceSpecificationContainersModelDataSourceS3DataSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageInferenceSpecificationContainersModelInputPropertyToTerraform(struct?: CcModelPackage.InferenceSpecificationContainersModelInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        data_input_config: cdktn.stringToTerraform(struct!.dataInputConfig),
    }
}


export function ccModelPackageInferenceSpecificationContainersModelInputPropertyToHclTerraform(struct?: CcModelPackage.InferenceSpecificationContainersModelInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        data_input_config: {
            value: cdktn.stringToHclTerraform(struct!.dataInputConfig),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageInferenceSpecificationContainersPropertyToTerraform(struct?: CcModelPackage.InferenceSpecificationContainersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        container_hostname: cdktn.stringToTerraform(struct!.containerHostname),
        environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
        framework: cdktn.stringToTerraform(struct!.framework),
        framework_version: cdktn.stringToTerraform(struct!.frameworkVersion),
        image: cdktn.stringToTerraform(struct!.image),
        image_digest: cdktn.stringToTerraform(struct!.imageDigest),
        model_data_source: ccModelPackageInferenceSpecificationContainersModelDataSourcePropertyToTerraform(struct!.modelDataSource),
        model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
        model_input: ccModelPackageInferenceSpecificationContainersModelInputPropertyToTerraform(struct!.modelInput),
        nearest_model_name: cdktn.stringToTerraform(struct!.nearestModelName),
    }
}


export function ccModelPackageInferenceSpecificationContainersPropertyToHclTerraform(struct?: CcModelPackage.InferenceSpecificationContainersProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        container_hostname: {
            value: cdktn.stringToHclTerraform(struct!.containerHostname),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        framework: {
            value: cdktn.stringToHclTerraform(struct!.framework),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        framework_version: {
            value: cdktn.stringToHclTerraform(struct!.frameworkVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image: {
            value: cdktn.stringToHclTerraform(struct!.image),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_digest: {
            value: cdktn.stringToHclTerraform(struct!.imageDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_data_source: {
            value: ccModelPackageInferenceSpecificationContainersModelDataSourcePropertyToHclTerraform(struct!.modelDataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceSpecificationContainersModelDataSourceProperty",
        },
        model_data_url: {
            value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_input: {
            value: ccModelPackageInferenceSpecificationContainersModelInputPropertyToHclTerraform(struct!.modelInput),
            isBlock: true,
            type: "struct",
            storageClassType: "InferenceSpecificationContainersModelInputProperty",
        },
        nearest_model_name: {
            value: cdktn.stringToHclTerraform(struct!.nearestModelName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageInferenceSpecificationPropertyToTerraform(struct?: CcModelPackage.InferenceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        containers: cdktn.listMapper(ccModelPackageInferenceSpecificationContainersPropertyToTerraform, false)(struct!.containers),
        supported_content_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedContentTypes),
        supported_realtime_inference_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
        supported_response_mime_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedResponseMimeTypes),
        supported_transform_instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedTransformInstanceTypes),
    }
}


export function ccModelPackageInferenceSpecificationPropertyToHclTerraform(struct?: CcModelPackage.InferenceSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        containers: {
            value: cdktn.listMapperHcl(ccModelPackageInferenceSpecificationContainersPropertyToHclTerraform, false)(struct!.containers),
            isBlock: true,
            type: "list",
            storageClassType: "InferenceSpecificationContainersPropertyList",
        },
        supported_content_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedContentTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_realtime_inference_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedRealtimeInferenceInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_response_mime_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedResponseMimeTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        supported_transform_instance_types: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedTransformInstanceTypes),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageMetadataPropertiesPropertyToTerraform(struct?: CcModelPackage.MetadataPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        commit_id: cdktn.stringToTerraform(struct!.commitId),
        generated_by: cdktn.stringToTerraform(struct!.generatedBy),
        project_id: cdktn.stringToTerraform(struct!.projectId),
        repository: cdktn.stringToTerraform(struct!.repository),
    }
}


export function ccModelPackageMetadataPropertiesPropertyToHclTerraform(struct?: CcModelPackage.MetadataPropertiesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        commit_id: {
            value: cdktn.stringToHclTerraform(struct!.commitId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        generated_by: {
            value: cdktn.stringToHclTerraform(struct!.generatedBy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        project_id: {
            value: cdktn.stringToHclTerraform(struct!.projectId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        repository: {
            value: cdktn.stringToHclTerraform(struct!.repository),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelCardPropertyToTerraform(struct?: CcModelPackage.ModelCardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        model_card_content: cdktn.stringToTerraform(struct!.modelCardContent),
        model_card_status: cdktn.stringToTerraform(struct!.modelCardStatus),
    }
}


export function ccModelPackageModelCardPropertyToHclTerraform(struct?: CcModelPackage.ModelCardProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        model_card_content: {
            value: cdktn.stringToHclTerraform(struct!.modelCardContent),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_card_status: {
            value: cdktn.stringToHclTerraform(struct!.modelCardStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackagePostTrainingReportPropertyToTerraform(struct?: CcModelPackage.PostTrainingReportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackagePostTrainingReportPropertyToHclTerraform(struct?: CcModelPackage.PostTrainingReportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackagePreTrainingReportPropertyToTerraform(struct?: CcModelPackage.PreTrainingReportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackagePreTrainingReportPropertyToHclTerraform(struct?: CcModelPackage.PreTrainingReportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelMetricsBiasReportPropertyToTerraform(struct?: CcModelPackage.ModelMetricsBiasReportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageModelMetricsBiasReportPropertyToHclTerraform(struct?: CcModelPackage.ModelMetricsBiasReportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageBiasPropertyToTerraform(struct?: CcModelPackage.BiasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        post_training_report: ccModelPackagePostTrainingReportPropertyToTerraform(struct!.postTrainingReport),
        pre_training_report: ccModelPackagePreTrainingReportPropertyToTerraform(struct!.preTrainingReport),
        report: ccModelPackageModelMetricsBiasReportPropertyToTerraform(struct!.report),
    }
}


export function ccModelPackageBiasPropertyToHclTerraform(struct?: CcModelPackage.BiasProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        post_training_report: {
            value: ccModelPackagePostTrainingReportPropertyToHclTerraform(struct!.postTrainingReport),
            isBlock: true,
            type: "struct",
            storageClassType: "PostTrainingReportProperty",
        },
        pre_training_report: {
            value: ccModelPackagePreTrainingReportPropertyToHclTerraform(struct!.preTrainingReport),
            isBlock: true,
            type: "struct",
            storageClassType: "PreTrainingReportProperty",
        },
        report: {
            value: ccModelPackageModelMetricsBiasReportPropertyToHclTerraform(struct!.report),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelMetricsBiasReportProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelMetricsExplainabilityReportPropertyToTerraform(struct?: CcModelPackage.ModelMetricsExplainabilityReportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageModelMetricsExplainabilityReportPropertyToHclTerraform(struct?: CcModelPackage.ModelMetricsExplainabilityReportProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageExplainabilityPropertyToTerraform(struct?: CcModelPackage.ExplainabilityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        report: ccModelPackageModelMetricsExplainabilityReportPropertyToTerraform(struct!.report),
    }
}


export function ccModelPackageExplainabilityPropertyToHclTerraform(struct?: CcModelPackage.ExplainabilityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        report: {
            value: ccModelPackageModelMetricsExplainabilityReportPropertyToHclTerraform(struct!.report),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelMetricsExplainabilityReportProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelMetricsModelDataQualityConstraintsPropertyToTerraform(struct?: CcModelPackage.ModelMetricsModelDataQualityConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageModelMetricsModelDataQualityConstraintsPropertyToHclTerraform(struct?: CcModelPackage.ModelMetricsModelDataQualityConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelMetricsModelDataQualityStatisticsPropertyToTerraform(struct?: CcModelPackage.ModelMetricsModelDataQualityStatisticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageModelMetricsModelDataQualityStatisticsPropertyToHclTerraform(struct?: CcModelPackage.ModelMetricsModelDataQualityStatisticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelDataQualityPropertyToTerraform(struct?: CcModelPackage.ModelDataQualityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraints: ccModelPackageModelMetricsModelDataQualityConstraintsPropertyToTerraform(struct!.constraints),
        statistics: ccModelPackageModelMetricsModelDataQualityStatisticsPropertyToTerraform(struct!.statistics),
    }
}


export function ccModelPackageModelDataQualityPropertyToHclTerraform(struct?: CcModelPackage.ModelDataQualityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraints: {
            value: ccModelPackageModelMetricsModelDataQualityConstraintsPropertyToHclTerraform(struct!.constraints),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelMetricsModelDataQualityConstraintsProperty",
        },
        statistics: {
            value: ccModelPackageModelMetricsModelDataQualityStatisticsPropertyToHclTerraform(struct!.statistics),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelMetricsModelDataQualityStatisticsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelMetricsModelQualityConstraintsPropertyToTerraform(struct?: CcModelPackage.ModelMetricsModelQualityConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageModelMetricsModelQualityConstraintsPropertyToHclTerraform(struct?: CcModelPackage.ModelMetricsModelQualityConstraintsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelMetricsModelQualityStatisticsPropertyToTerraform(struct?: CcModelPackage.ModelMetricsModelQualityStatisticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        content_digest: cdktn.stringToTerraform(struct!.contentDigest),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageModelMetricsModelQualityStatisticsPropertyToHclTerraform(struct?: CcModelPackage.ModelMetricsModelQualityStatisticsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        content_digest: {
            value: cdktn.stringToHclTerraform(struct!.contentDigest),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelQualityPropertyToTerraform(struct?: CcModelPackage.ModelQualityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        constraints: ccModelPackageModelMetricsModelQualityConstraintsPropertyToTerraform(struct!.constraints),
        statistics: ccModelPackageModelMetricsModelQualityStatisticsPropertyToTerraform(struct!.statistics),
    }
}


export function ccModelPackageModelQualityPropertyToHclTerraform(struct?: CcModelPackage.ModelQualityProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        constraints: {
            value: ccModelPackageModelMetricsModelQualityConstraintsPropertyToHclTerraform(struct!.constraints),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelMetricsModelQualityConstraintsProperty",
        },
        statistics: {
            value: ccModelPackageModelMetricsModelQualityStatisticsPropertyToHclTerraform(struct!.statistics),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelMetricsModelQualityStatisticsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelMetricsPropertyToTerraform(struct?: CcModelPackage.ModelMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bias: ccModelPackageBiasPropertyToTerraform(struct!.bias),
        explainability: ccModelPackageExplainabilityPropertyToTerraform(struct!.explainability),
        model_data_quality: ccModelPackageModelDataQualityPropertyToTerraform(struct!.modelDataQuality),
        model_quality: ccModelPackageModelQualityPropertyToTerraform(struct!.modelQuality),
    }
}


export function ccModelPackageModelMetricsPropertyToHclTerraform(struct?: CcModelPackage.ModelMetricsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bias: {
            value: ccModelPackageBiasPropertyToHclTerraform(struct!.bias),
            isBlock: true,
            type: "struct",
            storageClassType: "BiasProperty",
        },
        explainability: {
            value: ccModelPackageExplainabilityPropertyToHclTerraform(struct!.explainability),
            isBlock: true,
            type: "struct",
            storageClassType: "ExplainabilityProperty",
        },
        model_data_quality: {
            value: ccModelPackageModelDataQualityPropertyToHclTerraform(struct!.modelDataQuality),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelDataQualityProperty",
        },
        model_quality: {
            value: ccModelPackageModelQualityPropertyToHclTerraform(struct!.modelQuality),
            isBlock: true,
            type: "struct",
            storageClassType: "ModelQualityProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelPackageStatusItemPropertyToTerraform(struct?: CcModelPackage.ModelPackageStatusItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        failure_reason: cdktn.stringToTerraform(struct!.failureReason),
        name: cdktn.stringToTerraform(struct!.name),
        status: cdktn.stringToTerraform(struct!.status),
    }
}


export function ccModelPackageModelPackageStatusItemPropertyToHclTerraform(struct?: CcModelPackage.ModelPackageStatusItemProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        failure_reason: {
            value: cdktn.stringToHclTerraform(struct!.failureReason),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        status: {
            value: cdktn.stringToHclTerraform(struct!.status),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageModelPackageStatusDetailsPropertyToTerraform(struct?: CcModelPackage.ModelPackageStatusDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        validation_statuses: cdktn.listMapper(ccModelPackageModelPackageStatusItemPropertyToTerraform, false)(struct!.validationStatuses),
    }
}


export function ccModelPackageModelPackageStatusDetailsPropertyToHclTerraform(struct?: CcModelPackage.ModelPackageStatusDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        validation_statuses: {
            value: cdktn.listMapperHcl(ccModelPackageModelPackageStatusItemPropertyToHclTerraform, false)(struct!.validationStatuses),
            isBlock: true,
            type: "list",
            storageClassType: "ModelPackageStatusItemPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageSecurityConfigPropertyToTerraform(struct?: CcModelPackage.SecurityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
    }
}


export function ccModelPackageSecurityConfigPropertyToHclTerraform(struct?: CcModelPackage.SecurityConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageSourceAlgorithmPropertyToTerraform(struct?: CcModelPackage.SourceAlgorithmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        algorithm_name: cdktn.stringToTerraform(struct!.algorithmName),
        model_data_url: cdktn.stringToTerraform(struct!.modelDataUrl),
    }
}


export function ccModelPackageSourceAlgorithmPropertyToHclTerraform(struct?: CcModelPackage.SourceAlgorithmProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        algorithm_name: {
            value: cdktn.stringToHclTerraform(struct!.algorithmName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        model_data_url: {
            value: cdktn.stringToHclTerraform(struct!.modelDataUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageSourceAlgorithmSpecificationPropertyToTerraform(struct?: CcModelPackage.SourceAlgorithmSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_algorithms: cdktn.listMapper(ccModelPackageSourceAlgorithmPropertyToTerraform, false)(struct!.sourceAlgorithms),
    }
}


export function ccModelPackageSourceAlgorithmSpecificationPropertyToHclTerraform(struct?: CcModelPackage.SourceAlgorithmSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_algorithms: {
            value: cdktn.listMapperHcl(ccModelPackageSourceAlgorithmPropertyToHclTerraform, false)(struct!.sourceAlgorithms),
            isBlock: true,
            type: "list",
            storageClassType: "SourceAlgorithmPropertyList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageTagPropertyToTerraform(struct?: CcModelPackage.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccModelPackageTagPropertyToHclTerraform(struct?: CcModelPackage.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        value: {
            value: cdktn.stringToHclTerraform(struct!.value),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageS3DataSourcePropertyToTerraform(struct?: CcModelPackage.S3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_data_type: cdktn.stringToTerraform(struct!.s3DataType),
        s3_uri: cdktn.stringToTerraform(struct!.s3Uri),
    }
}


export function ccModelPackageS3DataSourcePropertyToHclTerraform(struct?: CcModelPackage.S3DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_data_type: {
            value: cdktn.stringToHclTerraform(struct!.s3DataType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_uri: {
            value: cdktn.stringToHclTerraform(struct!.s3Uri),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageDataSourcePropertyToTerraform(struct?: CcModelPackage.DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_data_source: ccModelPackageS3DataSourcePropertyToTerraform(struct!.s3DataSource),
    }
}


export function ccModelPackageDataSourcePropertyToHclTerraform(struct?: CcModelPackage.DataSourceProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_data_source: {
            value: ccModelPackageS3DataSourcePropertyToHclTerraform(struct!.s3DataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "S3DataSourceProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageTransformInputPropertyToTerraform(struct?: CcModelPackage.TransformInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        compression_type: cdktn.stringToTerraform(struct!.compressionType),
        content_type: cdktn.stringToTerraform(struct!.contentType),
        data_source: ccModelPackageDataSourcePropertyToTerraform(struct!.dataSource),
        split_type: cdktn.stringToTerraform(struct!.splitType),
    }
}


export function ccModelPackageTransformInputPropertyToHclTerraform(struct?: CcModelPackage.TransformInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        compression_type: {
            value: cdktn.stringToHclTerraform(struct!.compressionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        content_type: {
            value: cdktn.stringToHclTerraform(struct!.contentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        data_source: {
            value: ccModelPackageDataSourcePropertyToHclTerraform(struct!.dataSource),
            isBlock: true,
            type: "struct",
            storageClassType: "DataSourceProperty",
        },
        split_type: {
            value: cdktn.stringToHclTerraform(struct!.splitType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageTransformOutputPropertyToTerraform(struct?: CcModelPackage.TransformOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        accept: cdktn.stringToTerraform(struct!.accept),
        assemble_with: cdktn.stringToTerraform(struct!.assembleWith),
        kms_key_id: cdktn.stringToTerraform(struct!.kmsKeyId),
        s3_output_path: cdktn.stringToTerraform(struct!.s3OutputPath),
    }
}


export function ccModelPackageTransformOutputPropertyToHclTerraform(struct?: CcModelPackage.TransformOutputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        accept: {
            value: cdktn.stringToHclTerraform(struct!.accept),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        assemble_with: {
            value: cdktn.stringToHclTerraform(struct!.assembleWith),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.kmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_output_path: {
            value: cdktn.stringToHclTerraform(struct!.s3OutputPath),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageTransformResourcesPropertyToTerraform(struct?: CcModelPackage.TransformResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        instance_count: cdktn.numberToTerraform(struct!.instanceCount),
        instance_type: cdktn.stringToTerraform(struct!.instanceType),
        volume_kms_key_id: cdktn.stringToTerraform(struct!.volumeKmsKeyId),
    }
}


export function ccModelPackageTransformResourcesPropertyToHclTerraform(struct?: CcModelPackage.TransformResourcesProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        instance_count: {
            value: cdktn.numberToHclTerraform(struct!.instanceCount),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        instance_type: {
            value: cdktn.stringToHclTerraform(struct!.instanceType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        volume_kms_key_id: {
            value: cdktn.stringToHclTerraform(struct!.volumeKmsKeyId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageTransformJobDefinitionPropertyToTerraform(struct?: CcModelPackage.TransformJobDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        batch_strategy: cdktn.stringToTerraform(struct!.batchStrategy),
        environment: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.environment),
        max_concurrent_transforms: cdktn.numberToTerraform(struct!.maxConcurrentTransforms),
        max_payload_in_mb: cdktn.numberToTerraform(struct!.maxPayloadInMb),
        transform_input: ccModelPackageTransformInputPropertyToTerraform(struct!.transformInput),
        transform_output: ccModelPackageTransformOutputPropertyToTerraform(struct!.transformOutput),
        transform_resources: ccModelPackageTransformResourcesPropertyToTerraform(struct!.transformResources),
    }
}


export function ccModelPackageTransformJobDefinitionPropertyToHclTerraform(struct?: CcModelPackage.TransformJobDefinitionProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        batch_strategy: {
            value: cdktn.stringToHclTerraform(struct!.batchStrategy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        environment: {
            value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.environment),
            isBlock: false,
            type: "map",
            storageClassType: "stringMap",
        },
        max_concurrent_transforms: {
            value: cdktn.numberToHclTerraform(struct!.maxConcurrentTransforms),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        max_payload_in_mb: {
            value: cdktn.numberToHclTerraform(struct!.maxPayloadInMb),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        transform_input: {
            value: ccModelPackageTransformInputPropertyToHclTerraform(struct!.transformInput),
            isBlock: true,
            type: "struct",
            storageClassType: "TransformInputProperty",
        },
        transform_output: {
            value: ccModelPackageTransformOutputPropertyToHclTerraform(struct!.transformOutput),
            isBlock: true,
            type: "struct",
            storageClassType: "TransformOutputProperty",
        },
        transform_resources: {
            value: ccModelPackageTransformResourcesPropertyToHclTerraform(struct!.transformResources),
            isBlock: true,
            type: "struct",
            storageClassType: "TransformResourcesProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageValidationProfilePropertyToTerraform(struct?: CcModelPackage.ValidationProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        profile_name: cdktn.stringToTerraform(struct!.profileName),
        transform_job_definition: ccModelPackageTransformJobDefinitionPropertyToTerraform(struct!.transformJobDefinition),
    }
}


export function ccModelPackageValidationProfilePropertyToHclTerraform(struct?: CcModelPackage.ValidationProfileProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        profile_name: {
            value: cdktn.stringToHclTerraform(struct!.profileName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        transform_job_definition: {
            value: ccModelPackageTransformJobDefinitionPropertyToHclTerraform(struct!.transformJobDefinition),
            isBlock: true,
            type: "struct",
            storageClassType: "TransformJobDefinitionProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccModelPackageValidationSpecificationPropertyToTerraform(struct?: CcModelPackage.ValidationSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        validation_profiles: cdktn.listMapper(ccModelPackageValidationProfilePropertyToTerraform, false)(struct!.validationProfiles),
        validation_role: cdktn.stringToTerraform(struct!.validationRole),
    }
}


export function ccModelPackageValidationSpecificationPropertyToHclTerraform(struct?: CcModelPackage.ValidationSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        validation_profiles: {
            value: cdktn.listMapperHcl(ccModelPackageValidationProfilePropertyToHclTerraform, false)(struct!.validationProfiles),
            isBlock: true,
            type: "list",
            storageClassType: "ValidationProfilePropertyList",
        },
        validation_role: {
            value: cdktn.stringToHclTerraform(struct!.validationRole),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcModelPackage {
export interface ModelAccessConfigProperty {
    /**
    * Specifies agreement to the model end-user license agreement (EULA).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#accept_eula CcModelPackage#accept_eula}
    */
    readonly acceptEula?: boolean | cdktn.IResolvable;
}
export class ModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelAccessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceptEula !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceptEula = this._acceptEula;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelAccessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceptEula = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceptEula = value.acceptEula;
        }
    }

    // accept_eula - computed: true, optional: true, required: false
    private _acceptEula?: boolean | cdktn.IResolvable; 
    public get acceptEula() {
        return this.getBooleanAttribute('accept_eula');
    }
    public set acceptEula(value: boolean | cdktn.IResolvable) {
        this._acceptEula = value;
    }
    public resetAcceptEula() {
        this._acceptEula = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptEulaInput() {
        return this._acceptEula;
    }
}
export interface S3ModelDataSourceProperty {
    /**
    * Specifies how the ML model data is prepared.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#compression_type CcModelPackage#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Specifies the access configuration file for the ML model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_access_config CcModelPackage#model_access_config}
    */
    readonly modelAccessConfig?: ModelAccessConfigProperty;
    /**
    * Specifies the type of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_data_type CcModelPackage#s3_data_type}
    */
    readonly s3DataType?: string;
    /**
    * Specifies the S3 path of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class S3ModelDataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3ModelDataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._modelAccessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
        }
        if (this._s3DataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataType = this._s3DataType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3ModelDataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compressionType = undefined;
            this._modelAccessConfig.internalValue = undefined;
            this._s3DataType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compressionType = value.compressionType;
            this._modelAccessConfig.internalValue = value.modelAccessConfig;
            this._s3DataType = value.s3DataType;
            this._s3Uri = value.s3Uri;
        }
    }

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
    }

    // model_access_config - computed: true, optional: true, required: false
    private _modelAccessConfig = new ModelAccessConfigPropertyOutputReference(this, "model_access_config");
    public get modelAccessConfig() {
        return this._modelAccessConfig;
    }
    public putModelAccessConfig(value: ModelAccessConfigProperty) {
        this._modelAccessConfig.internalValue = value;
    }
    public resetModelAccessConfig() {
        this._modelAccessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelAccessConfigInput() {
        return this._modelAccessConfig.internalValue;
    }

    // s3_data_type - computed: true, optional: true, required: false
    private _s3DataType?: string; 
    public get s3DataType() {
        return this.getStringAttribute('s3_data_type');
    }
    public set s3DataType(value: string) {
        this._s3DataType = value;
    }
    public resetS3DataType() {
        this._s3DataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataTypeInput() {
        return this._s3DataType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface ModelDataSourceProperty {
    /**
    * Specifies the S3 location of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_data_source CcModelPackage#s3_data_source}
    */
    readonly s3DataSource?: S3ModelDataSourceProperty;
}
export class ModelDataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelDataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3DataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelDataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = value.s3DataSource;
        }
    }

    // s3_data_source - computed: true, optional: true, required: false
    private _s3DataSource = new S3ModelDataSourcePropertyOutputReference(this, "s3_data_source");
    public get s3DataSource() {
        return this._s3DataSource;
    }
    public putS3DataSource(value: S3ModelDataSourceProperty) {
        this._s3DataSource.internalValue = value;
    }
    public resetS3DataSource() {
        this._s3DataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataSourceInput() {
        return this._s3DataSource.internalValue;
    }
}
export interface ModelInputProperty {
    /**
    * The input configuration object for the model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#data_input_config CcModelPackage#data_input_config}
    */
    readonly dataInputConfig?: string;
}
export class ModelInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataInputConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataInputConfig = this._dataInputConfig;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataInputConfig = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataInputConfig = value.dataInputConfig;
        }
    }

    // data_input_config - computed: true, optional: true, required: false
    private _dataInputConfig?: string; 
    public get dataInputConfig() {
        return this.getStringAttribute('data_input_config');
    }
    public set dataInputConfig(value: string) {
        this._dataInputConfig = value;
    }
    public resetDataInputConfig() {
        this._dataInputConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInputConfigInput() {
        return this._dataInputConfig;
    }
}
export interface ModelPackageContainerDefinitionProperty {
    /**
    * The DNS host name for the Docker container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#container_hostname CcModelPackage#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * Sets the environment variables in the Docker container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#environment CcModelPackage#environment}
    */
    readonly environment?: { [key: string]: string };
    /**
    * The machine learning framework of the model package container image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#framework CcModelPackage#framework}
    */
    readonly framework?: string;
    /**
    * The framework version of the Model Package Container Image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#framework_version CcModelPackage#framework_version}
    */
    readonly frameworkVersion?: string;
    /**
    * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#image CcModelPackage#image}
    */
    readonly image?: string;
    /**
    * An MD5 hash of the training algorithm that identifies the Docker image used for training.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#image_digest CcModelPackage#image_digest}
    */
    readonly imageDigest?: string;
    /**
    * Specifies the location of ML model data to deploy during endpoint creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_data_source CcModelPackage#model_data_source}
    */
    readonly modelDataSource?: ModelDataSourceProperty;
    /**
    * A structure with Model Input details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_data_url CcModelPackage#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_input CcModelPackage#model_input}
    */
    readonly modelInput?: ModelInputProperty;
    /**
    * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#nearest_model_name CcModelPackage#nearest_model_name}
    */
    readonly nearestModelName?: string;
}
export class ModelPackageContainerDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ModelPackageContainerDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerHostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerHostname = this._containerHostname;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._framework !== undefined) {
            hasAnyValues = true;
            internalValueResult.framework = this._framework;
        }
        if (this._frameworkVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.frameworkVersion = this._frameworkVersion;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._imageDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageDigest = this._imageDigest;
        }
        if (this._modelDataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
        }
        if (this._modelDataUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataUrl = this._modelDataUrl;
        }
        if (this._modelInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelInput = this._modelInput?.internalValue;
        }
        if (this._nearestModelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.nearestModelName = this._nearestModelName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelPackageContainerDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerHostname = undefined;
            this._environment = undefined;
            this._framework = undefined;
            this._frameworkVersion = undefined;
            this._image = undefined;
            this._imageDigest = undefined;
            this._modelDataSource.internalValue = undefined;
            this._modelDataUrl = undefined;
            this._modelInput.internalValue = undefined;
            this._nearestModelName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerHostname = value.containerHostname;
            this._environment = value.environment;
            this._framework = value.framework;
            this._frameworkVersion = value.frameworkVersion;
            this._image = value.image;
            this._imageDigest = value.imageDigest;
            this._modelDataSource.internalValue = value.modelDataSource;
            this._modelDataUrl = value.modelDataUrl;
            this._modelInput.internalValue = value.modelInput;
            this._nearestModelName = value.nearestModelName;
        }
    }

    // container_hostname - computed: true, optional: true, required: false
    private _containerHostname?: string; 
    public get containerHostname() {
        return this.getStringAttribute('container_hostname');
    }
    public set containerHostname(value: string) {
        this._containerHostname = value;
    }
    public resetContainerHostname() {
        this._containerHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerHostnameInput() {
        return this._containerHostname;
    }

    // environment - computed: true, optional: true, required: false
    private _environment?: { [key: string]: string }; 
    public get environment() {
        return this.getStringMapAttribute('environment');
    }
    public set environment(value: { [key: string]: string }) {
        this._environment = value;
    }
    public resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment;
    }

    // framework - computed: true, optional: true, required: false
    private _framework?: string; 
    public get framework() {
        return this.getStringAttribute('framework');
    }
    public set framework(value: string) {
        this._framework = value;
    }
    public resetFramework() {
        this._framework = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkInput() {
        return this._framework;
    }

    // framework_version - computed: true, optional: true, required: false
    private _frameworkVersion?: string; 
    public get frameworkVersion() {
        return this.getStringAttribute('framework_version');
    }
    public set frameworkVersion(value: string) {
        this._frameworkVersion = value;
    }
    public resetFrameworkVersion() {
        this._frameworkVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkVersionInput() {
        return this._frameworkVersion;
    }

    // image - computed: true, optional: true, required: false
    private _image?: string; 
    public get image() {
        return this.getStringAttribute('image');
    }
    public set image(value: string) {
        this._image = value;
    }
    public resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image;
    }

    // image_digest - computed: true, optional: true, required: false
    private _imageDigest?: string; 
    public get imageDigest() {
        return this.getStringAttribute('image_digest');
    }
    public set imageDigest(value: string) {
        this._imageDigest = value;
    }
    public resetImageDigest() {
        this._imageDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageDigestInput() {
        return this._imageDigest;
    }

    // model_data_source - computed: true, optional: true, required: false
    private _modelDataSource = new ModelDataSourcePropertyOutputReference(this, "model_data_source");
    public get modelDataSource() {
        return this._modelDataSource;
    }
    public putModelDataSource(value: ModelDataSourceProperty) {
        this._modelDataSource.internalValue = value;
    }
    public resetModelDataSource() {
        this._modelDataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataSourceInput() {
        return this._modelDataSource.internalValue;
    }

    // model_data_url - computed: true, optional: true, required: false
    private _modelDataUrl?: string; 
    public get modelDataUrl() {
        return this.getStringAttribute('model_data_url');
    }
    public set modelDataUrl(value: string) {
        this._modelDataUrl = value;
    }
    public resetModelDataUrl() {
        this._modelDataUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataUrlInput() {
        return this._modelDataUrl;
    }

    // model_input - computed: true, optional: true, required: false
    private _modelInput = new ModelInputPropertyOutputReference(this, "model_input");
    public get modelInput() {
        return this._modelInput;
    }
    public putModelInput(value: ModelInputProperty) {
        this._modelInput.internalValue = value;
    }
    public resetModelInput() {
        this._modelInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInputInput() {
        return this._modelInput.internalValue;
    }

    // nearest_model_name - computed: true, optional: true, required: false
    private _nearestModelName?: string; 
    public get nearestModelName() {
        return this.getStringAttribute('nearest_model_name');
    }
    public set nearestModelName(value: string) {
        this._nearestModelName = value;
    }
    public resetNearestModelName() {
        this._nearestModelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nearestModelNameInput() {
        return this._nearestModelName;
    }
}

export class ModelPackageContainerDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : ModelPackageContainerDefinitionProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): ModelPackageContainerDefinitionPropertyOutputReference {
        return new ModelPackageContainerDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AdditionalInferenceSpecificationDefinitionProperty {
    /**
    * The Amazon ECR registry path of the Docker image that contains the inference code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#containers CcModelPackage#containers}
    */
    readonly containers?: ModelPackageContainerDefinitionProperty[] | cdktn.IResolvable;
    /**
    * A description of the additional Inference specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#description CcModelPackage#description}
    */
    readonly description?: string;
    /**
    * A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#name CcModelPackage#name}
    */
    readonly name?: string;
    /**
    * The supported MIME types for the input data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_content_types CcModelPackage#supported_content_types}
    */
    readonly supportedContentTypes?: string[];
    /**
    * A list of the instance types that are used to generate inferences in real-time
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_realtime_inference_instance_types CcModelPackage#supported_realtime_inference_instance_types}
    */
    readonly supportedRealtimeInferenceInstanceTypes?: string[];
    /**
    * The supported MIME types for the output data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_response_mime_types CcModelPackage#supported_response_mime_types}
    */
    readonly supportedResponseMimeTypes?: string[];
    /**
    * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_transform_instance_types CcModelPackage#supported_transform_instance_types}
    */
    readonly supportedTransformInstanceTypes?: string[];
}
export class AdditionalInferenceSpecificationDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): AdditionalInferenceSpecificationDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containers = this._containers?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._supportedContentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedContentTypes = this._supportedContentTypes;
        }
        if (this._supportedRealtimeInferenceInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedRealtimeInferenceInstanceTypes = this._supportedRealtimeInferenceInstanceTypes;
        }
        if (this._supportedResponseMimeTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedResponseMimeTypes = this._supportedResponseMimeTypes;
        }
        if (this._supportedTransformInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedTransformInstanceTypes = this._supportedTransformInstanceTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalInferenceSpecificationDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containers.internalValue = undefined;
            this._description = undefined;
            this._name = undefined;
            this._supportedContentTypes = undefined;
            this._supportedRealtimeInferenceInstanceTypes = undefined;
            this._supportedResponseMimeTypes = undefined;
            this._supportedTransformInstanceTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containers.internalValue = value.containers;
            this._description = value.description;
            this._name = value.name;
            this._supportedContentTypes = value.supportedContentTypes;
            this._supportedRealtimeInferenceInstanceTypes = value.supportedRealtimeInferenceInstanceTypes;
            this._supportedResponseMimeTypes = value.supportedResponseMimeTypes;
            this._supportedTransformInstanceTypes = value.supportedTransformInstanceTypes;
        }
    }

    // containers - computed: true, optional: true, required: false
    private _containers = new ModelPackageContainerDefinitionPropertyList(this, "containers", false);
    public get containers() {
        return this._containers;
    }
    public putContainers(value: ModelPackageContainerDefinitionProperty[] | cdktn.IResolvable) {
        this._containers.internalValue = value;
    }
    public resetContainers() {
        this._containers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containersInput() {
        return this._containers.internalValue;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // supported_content_types - computed: true, optional: true, required: false
    private _supportedContentTypes?: string[]; 
    public get supportedContentTypes() {
        return this.getListAttribute('supported_content_types');
    }
    public set supportedContentTypes(value: string[]) {
        this._supportedContentTypes = value;
    }
    public resetSupportedContentTypes() {
        this._supportedContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedContentTypesInput() {
        return this._supportedContentTypes;
    }

    // supported_realtime_inference_instance_types - computed: true, optional: true, required: false
    private _supportedRealtimeInferenceInstanceTypes?: string[]; 
    public get supportedRealtimeInferenceInstanceTypes() {
        return this.getListAttribute('supported_realtime_inference_instance_types');
    }
    public set supportedRealtimeInferenceInstanceTypes(value: string[]) {
        this._supportedRealtimeInferenceInstanceTypes = value;
    }
    public resetSupportedRealtimeInferenceInstanceTypes() {
        this._supportedRealtimeInferenceInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedRealtimeInferenceInstanceTypesInput() {
        return this._supportedRealtimeInferenceInstanceTypes;
    }

    // supported_response_mime_types - computed: true, optional: true, required: false
    private _supportedResponseMimeTypes?: string[]; 
    public get supportedResponseMimeTypes() {
        return this.getListAttribute('supported_response_mime_types');
    }
    public set supportedResponseMimeTypes(value: string[]) {
        this._supportedResponseMimeTypes = value;
    }
    public resetSupportedResponseMimeTypes() {
        this._supportedResponseMimeTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedResponseMimeTypesInput() {
        return this._supportedResponseMimeTypes;
    }

    // supported_transform_instance_types - computed: true, optional: true, required: false
    private _supportedTransformInstanceTypes?: string[]; 
    public get supportedTransformInstanceTypes() {
        return this.getListAttribute('supported_transform_instance_types');
    }
    public set supportedTransformInstanceTypes(value: string[]) {
        this._supportedTransformInstanceTypes = value;
    }
    public resetSupportedTransformInstanceTypes() {
        this._supportedTransformInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedTransformInstanceTypesInput() {
        return this._supportedTransformInstanceTypes;
    }
}

export class AdditionalInferenceSpecificationDefinitionPropertyList extends cdktn.ComplexList {
    public internalValue? : AdditionalInferenceSpecificationDefinitionProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): AdditionalInferenceSpecificationDefinitionPropertyOutputReference {
        return new AdditionalInferenceSpecificationDefinitionPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigProperty {
    /**
    * Specifies agreement to the model end-user license agreement (EULA).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#accept_eula CcModelPackage#accept_eula}
    */
    readonly acceptEula?: boolean | cdktn.IResolvable;
}
export class AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceptEula !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceptEula = this._acceptEula;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceptEula = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceptEula = value.acceptEula;
        }
    }

    // accept_eula - computed: true, optional: true, required: false
    private _acceptEula?: boolean | cdktn.IResolvable; 
    public get acceptEula() {
        return this.getBooleanAttribute('accept_eula');
    }
    public set acceptEula(value: boolean | cdktn.IResolvable) {
        this._acceptEula = value;
    }
    public resetAcceptEula() {
        this._acceptEula = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptEulaInput() {
        return this._acceptEula;
    }
}
export interface AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceProperty {
    /**
    * Specifies how the ML model data is prepared.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#compression_type CcModelPackage#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Specifies the access configuration file for the ML model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_access_config CcModelPackage#model_access_config}
    */
    readonly modelAccessConfig?: AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigProperty;
    /**
    * Specifies the type of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_data_type CcModelPackage#s3_data_type}
    */
    readonly s3DataType?: string;
    /**
    * Specifies the S3 path of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._modelAccessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
        }
        if (this._s3DataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataType = this._s3DataType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compressionType = undefined;
            this._modelAccessConfig.internalValue = undefined;
            this._s3DataType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compressionType = value.compressionType;
            this._modelAccessConfig.internalValue = value.modelAccessConfig;
            this._s3DataType = value.s3DataType;
            this._s3Uri = value.s3Uri;
        }
    }

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
    }

    // model_access_config - computed: true, optional: true, required: false
    private _modelAccessConfig = new AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference(this, "model_access_config");
    public get modelAccessConfig() {
        return this._modelAccessConfig;
    }
    public putModelAccessConfig(value: AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceModelAccessConfigProperty) {
        this._modelAccessConfig.internalValue = value;
    }
    public resetModelAccessConfig() {
        this._modelAccessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelAccessConfigInput() {
        return this._modelAccessConfig.internalValue;
    }

    // s3_data_type - computed: true, optional: true, required: false
    private _s3DataType?: string; 
    public get s3DataType() {
        return this.getStringAttribute('s3_data_type');
    }
    public set s3DataType(value: string) {
        this._s3DataType = value;
    }
    public resetS3DataType() {
        this._s3DataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataTypeInput() {
        return this._s3DataType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface AdditionalInferenceSpecificationsToAddContainersModelDataSourceProperty {
    /**
    * Specifies the S3 location of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_data_source CcModelPackage#s3_data_source}
    */
    readonly s3DataSource?: AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceProperty;
}
export class AdditionalInferenceSpecificationsToAddContainersModelDataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdditionalInferenceSpecificationsToAddContainersModelDataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3DataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalInferenceSpecificationsToAddContainersModelDataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = value.s3DataSource;
        }
    }

    // s3_data_source - computed: true, optional: true, required: false
    private _s3DataSource = new AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourcePropertyOutputReference(this, "s3_data_source");
    public get s3DataSource() {
        return this._s3DataSource;
    }
    public putS3DataSource(value: AdditionalInferenceSpecificationsToAddContainersModelDataSourceS3DataSourceProperty) {
        this._s3DataSource.internalValue = value;
    }
    public resetS3DataSource() {
        this._s3DataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataSourceInput() {
        return this._s3DataSource.internalValue;
    }
}
export interface AdditionalInferenceSpecificationsToAddContainersModelInputProperty {
    /**
    * The input configuration object for the model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#data_input_config CcModelPackage#data_input_config}
    */
    readonly dataInputConfig?: string;
}
export class AdditionalInferenceSpecificationsToAddContainersModelInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AdditionalInferenceSpecificationsToAddContainersModelInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataInputConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataInputConfig = this._dataInputConfig;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalInferenceSpecificationsToAddContainersModelInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataInputConfig = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataInputConfig = value.dataInputConfig;
        }
    }

    // data_input_config - computed: true, optional: true, required: false
    private _dataInputConfig?: string; 
    public get dataInputConfig() {
        return this.getStringAttribute('data_input_config');
    }
    public set dataInputConfig(value: string) {
        this._dataInputConfig = value;
    }
    public resetDataInputConfig() {
        this._dataInputConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInputConfigInput() {
        return this._dataInputConfig;
    }
}
export interface AdditionalInferenceSpecificationsToAddContainersProperty {
    /**
    * The DNS host name for the Docker container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#container_hostname CcModelPackage#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * Sets the environment variables in the Docker container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#environment CcModelPackage#environment}
    */
    readonly environment?: { [key: string]: string };
    /**
    * The machine learning framework of the model package container image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#framework CcModelPackage#framework}
    */
    readonly framework?: string;
    /**
    * The framework version of the Model Package Container Image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#framework_version CcModelPackage#framework_version}
    */
    readonly frameworkVersion?: string;
    /**
    * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#image CcModelPackage#image}
    */
    readonly image?: string;
    /**
    * An MD5 hash of the training algorithm that identifies the Docker image used for training.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#image_digest CcModelPackage#image_digest}
    */
    readonly imageDigest?: string;
    /**
    * Specifies the location of ML model data to deploy during endpoint creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_data_source CcModelPackage#model_data_source}
    */
    readonly modelDataSource?: AdditionalInferenceSpecificationsToAddContainersModelDataSourceProperty;
    /**
    * A structure with Model Input details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_data_url CcModelPackage#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_input CcModelPackage#model_input}
    */
    readonly modelInput?: AdditionalInferenceSpecificationsToAddContainersModelInputProperty;
    /**
    * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#nearest_model_name CcModelPackage#nearest_model_name}
    */
    readonly nearestModelName?: string;
}
export class AdditionalInferenceSpecificationsToAddContainersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): AdditionalInferenceSpecificationsToAddContainersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerHostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerHostname = this._containerHostname;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._framework !== undefined) {
            hasAnyValues = true;
            internalValueResult.framework = this._framework;
        }
        if (this._frameworkVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.frameworkVersion = this._frameworkVersion;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._imageDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageDigest = this._imageDigest;
        }
        if (this._modelDataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
        }
        if (this._modelDataUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataUrl = this._modelDataUrl;
        }
        if (this._modelInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelInput = this._modelInput?.internalValue;
        }
        if (this._nearestModelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.nearestModelName = this._nearestModelName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalInferenceSpecificationsToAddContainersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerHostname = undefined;
            this._environment = undefined;
            this._framework = undefined;
            this._frameworkVersion = undefined;
            this._image = undefined;
            this._imageDigest = undefined;
            this._modelDataSource.internalValue = undefined;
            this._modelDataUrl = undefined;
            this._modelInput.internalValue = undefined;
            this._nearestModelName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerHostname = value.containerHostname;
            this._environment = value.environment;
            this._framework = value.framework;
            this._frameworkVersion = value.frameworkVersion;
            this._image = value.image;
            this._imageDigest = value.imageDigest;
            this._modelDataSource.internalValue = value.modelDataSource;
            this._modelDataUrl = value.modelDataUrl;
            this._modelInput.internalValue = value.modelInput;
            this._nearestModelName = value.nearestModelName;
        }
    }

    // container_hostname - computed: true, optional: true, required: false
    private _containerHostname?: string; 
    public get containerHostname() {
        return this.getStringAttribute('container_hostname');
    }
    public set containerHostname(value: string) {
        this._containerHostname = value;
    }
    public resetContainerHostname() {
        this._containerHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerHostnameInput() {
        return this._containerHostname;
    }

    // environment - computed: true, optional: true, required: false
    private _environment?: { [key: string]: string }; 
    public get environment() {
        return this.getStringMapAttribute('environment');
    }
    public set environment(value: { [key: string]: string }) {
        this._environment = value;
    }
    public resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment;
    }

    // framework - computed: true, optional: true, required: false
    private _framework?: string; 
    public get framework() {
        return this.getStringAttribute('framework');
    }
    public set framework(value: string) {
        this._framework = value;
    }
    public resetFramework() {
        this._framework = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkInput() {
        return this._framework;
    }

    // framework_version - computed: true, optional: true, required: false
    private _frameworkVersion?: string; 
    public get frameworkVersion() {
        return this.getStringAttribute('framework_version');
    }
    public set frameworkVersion(value: string) {
        this._frameworkVersion = value;
    }
    public resetFrameworkVersion() {
        this._frameworkVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkVersionInput() {
        return this._frameworkVersion;
    }

    // image - computed: true, optional: true, required: false
    private _image?: string; 
    public get image() {
        return this.getStringAttribute('image');
    }
    public set image(value: string) {
        this._image = value;
    }
    public resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image;
    }

    // image_digest - computed: true, optional: true, required: false
    private _imageDigest?: string; 
    public get imageDigest() {
        return this.getStringAttribute('image_digest');
    }
    public set imageDigest(value: string) {
        this._imageDigest = value;
    }
    public resetImageDigest() {
        this._imageDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageDigestInput() {
        return this._imageDigest;
    }

    // model_data_source - computed: true, optional: true, required: false
    private _modelDataSource = new AdditionalInferenceSpecificationsToAddContainersModelDataSourcePropertyOutputReference(this, "model_data_source");
    public get modelDataSource() {
        return this._modelDataSource;
    }
    public putModelDataSource(value: AdditionalInferenceSpecificationsToAddContainersModelDataSourceProperty) {
        this._modelDataSource.internalValue = value;
    }
    public resetModelDataSource() {
        this._modelDataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataSourceInput() {
        return this._modelDataSource.internalValue;
    }

    // model_data_url - computed: true, optional: true, required: false
    private _modelDataUrl?: string; 
    public get modelDataUrl() {
        return this.getStringAttribute('model_data_url');
    }
    public set modelDataUrl(value: string) {
        this._modelDataUrl = value;
    }
    public resetModelDataUrl() {
        this._modelDataUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataUrlInput() {
        return this._modelDataUrl;
    }

    // model_input - computed: true, optional: true, required: false
    private _modelInput = new AdditionalInferenceSpecificationsToAddContainersModelInputPropertyOutputReference(this, "model_input");
    public get modelInput() {
        return this._modelInput;
    }
    public putModelInput(value: AdditionalInferenceSpecificationsToAddContainersModelInputProperty) {
        this._modelInput.internalValue = value;
    }
    public resetModelInput() {
        this._modelInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInputInput() {
        return this._modelInput.internalValue;
    }

    // nearest_model_name - computed: true, optional: true, required: false
    private _nearestModelName?: string; 
    public get nearestModelName() {
        return this.getStringAttribute('nearest_model_name');
    }
    public set nearestModelName(value: string) {
        this._nearestModelName = value;
    }
    public resetNearestModelName() {
        this._nearestModelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nearestModelNameInput() {
        return this._nearestModelName;
    }
}

export class AdditionalInferenceSpecificationsToAddContainersPropertyList extends cdktn.ComplexList {
    public internalValue? : AdditionalInferenceSpecificationsToAddContainersProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): AdditionalInferenceSpecificationsToAddContainersPropertyOutputReference {
        return new AdditionalInferenceSpecificationsToAddContainersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface AdditionalInferenceSpecificationsToAddProperty {
    /**
    * The Amazon ECR registry path of the Docker image that contains the inference code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#containers CcModelPackage#containers}
    */
    readonly containers?: AdditionalInferenceSpecificationsToAddContainersProperty[] | cdktn.IResolvable;
    /**
    * A description of the additional Inference specification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#description CcModelPackage#description}
    */
    readonly description?: string;
    /**
    * A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#name CcModelPackage#name}
    */
    readonly name?: string;
    /**
    * The supported MIME types for the input data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_content_types CcModelPackage#supported_content_types}
    */
    readonly supportedContentTypes?: string[];
    /**
    * A list of the instance types that are used to generate inferences in real-time
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_realtime_inference_instance_types CcModelPackage#supported_realtime_inference_instance_types}
    */
    readonly supportedRealtimeInferenceInstanceTypes?: string[];
    /**
    * The supported MIME types for the output data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_response_mime_types CcModelPackage#supported_response_mime_types}
    */
    readonly supportedResponseMimeTypes?: string[];
    /**
    * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_transform_instance_types CcModelPackage#supported_transform_instance_types}
    */
    readonly supportedTransformInstanceTypes?: string[];
}
export class AdditionalInferenceSpecificationsToAddPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): AdditionalInferenceSpecificationsToAddProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containers = this._containers?.internalValue;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._supportedContentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedContentTypes = this._supportedContentTypes;
        }
        if (this._supportedRealtimeInferenceInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedRealtimeInferenceInstanceTypes = this._supportedRealtimeInferenceInstanceTypes;
        }
        if (this._supportedResponseMimeTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedResponseMimeTypes = this._supportedResponseMimeTypes;
        }
        if (this._supportedTransformInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedTransformInstanceTypes = this._supportedTransformInstanceTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AdditionalInferenceSpecificationsToAddProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containers.internalValue = undefined;
            this._description = undefined;
            this._name = undefined;
            this._supportedContentTypes = undefined;
            this._supportedRealtimeInferenceInstanceTypes = undefined;
            this._supportedResponseMimeTypes = undefined;
            this._supportedTransformInstanceTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containers.internalValue = value.containers;
            this._description = value.description;
            this._name = value.name;
            this._supportedContentTypes = value.supportedContentTypes;
            this._supportedRealtimeInferenceInstanceTypes = value.supportedRealtimeInferenceInstanceTypes;
            this._supportedResponseMimeTypes = value.supportedResponseMimeTypes;
            this._supportedTransformInstanceTypes = value.supportedTransformInstanceTypes;
        }
    }

    // containers - computed: true, optional: true, required: false
    private _containers = new AdditionalInferenceSpecificationsToAddContainersPropertyList(this, "containers", false);
    public get containers() {
        return this._containers;
    }
    public putContainers(value: AdditionalInferenceSpecificationsToAddContainersProperty[] | cdktn.IResolvable) {
        this._containers.internalValue = value;
    }
    public resetContainers() {
        this._containers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containersInput() {
        return this._containers.internalValue;
    }

    // description - computed: true, optional: true, required: false
    private _description?: string; 
    public get description() {
        return this.getStringAttribute('description');
    }
    public set description(value: string) {
        this._description = value;
    }
    public resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
        return this._description;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // supported_content_types - computed: true, optional: true, required: false
    private _supportedContentTypes?: string[]; 
    public get supportedContentTypes() {
        return this.getListAttribute('supported_content_types');
    }
    public set supportedContentTypes(value: string[]) {
        this._supportedContentTypes = value;
    }
    public resetSupportedContentTypes() {
        this._supportedContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedContentTypesInput() {
        return this._supportedContentTypes;
    }

    // supported_realtime_inference_instance_types - computed: true, optional: true, required: false
    private _supportedRealtimeInferenceInstanceTypes?: string[]; 
    public get supportedRealtimeInferenceInstanceTypes() {
        return this.getListAttribute('supported_realtime_inference_instance_types');
    }
    public set supportedRealtimeInferenceInstanceTypes(value: string[]) {
        this._supportedRealtimeInferenceInstanceTypes = value;
    }
    public resetSupportedRealtimeInferenceInstanceTypes() {
        this._supportedRealtimeInferenceInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedRealtimeInferenceInstanceTypesInput() {
        return this._supportedRealtimeInferenceInstanceTypes;
    }

    // supported_response_mime_types - computed: true, optional: true, required: false
    private _supportedResponseMimeTypes?: string[]; 
    public get supportedResponseMimeTypes() {
        return this.getListAttribute('supported_response_mime_types');
    }
    public set supportedResponseMimeTypes(value: string[]) {
        this._supportedResponseMimeTypes = value;
    }
    public resetSupportedResponseMimeTypes() {
        this._supportedResponseMimeTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedResponseMimeTypesInput() {
        return this._supportedResponseMimeTypes;
    }

    // supported_transform_instance_types - computed: true, optional: true, required: false
    private _supportedTransformInstanceTypes?: string[]; 
    public get supportedTransformInstanceTypes() {
        return this.getListAttribute('supported_transform_instance_types');
    }
    public set supportedTransformInstanceTypes(value: string[]) {
        this._supportedTransformInstanceTypes = value;
    }
    public resetSupportedTransformInstanceTypes() {
        this._supportedTransformInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedTransformInstanceTypesInput() {
        return this._supportedTransformInstanceTypes;
    }
}

export class AdditionalInferenceSpecificationsToAddPropertyList extends cdktn.ComplexList {
    public internalValue? : AdditionalInferenceSpecificationsToAddProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): AdditionalInferenceSpecificationsToAddPropertyOutputReference {
        return new AdditionalInferenceSpecificationsToAddPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface FileSourceProperty {
    /**
    * The digest of the file source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the file source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the file source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class FileSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): FileSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: FileSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface MetricsSourceProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class MetricsSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetricsSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetricsSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface PreTrainingConstraintsProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class PreTrainingConstraintsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PreTrainingConstraintsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PreTrainingConstraintsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface DriftCheckBiasProperty {
    /**
    * Represents a File Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#config_file CcModelPackage#config_file}
    */
    readonly configFile?: FileSourceProperty;
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#post_training_constraints CcModelPackage#post_training_constraints}
    */
    readonly postTrainingConstraints?: MetricsSourceProperty;
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#pre_training_constraints CcModelPackage#pre_training_constraints}
    */
    readonly preTrainingConstraints?: PreTrainingConstraintsProperty;
}
export class DriftCheckBiasPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DriftCheckBiasProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configFile?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configFile = this._configFile?.internalValue;
        }
        if (this._postTrainingConstraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postTrainingConstraints = this._postTrainingConstraints?.internalValue;
        }
        if (this._preTrainingConstraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.preTrainingConstraints = this._preTrainingConstraints?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DriftCheckBiasProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configFile.internalValue = undefined;
            this._postTrainingConstraints.internalValue = undefined;
            this._preTrainingConstraints.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configFile.internalValue = value.configFile;
            this._postTrainingConstraints.internalValue = value.postTrainingConstraints;
            this._preTrainingConstraints.internalValue = value.preTrainingConstraints;
        }
    }

    // config_file - computed: true, optional: true, required: false
    private _configFile = new FileSourcePropertyOutputReference(this, "config_file");
    public get configFile() {
        return this._configFile;
    }
    public putConfigFile(value: FileSourceProperty) {
        this._configFile.internalValue = value;
    }
    public resetConfigFile() {
        this._configFile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configFileInput() {
        return this._configFile.internalValue;
    }

    // post_training_constraints - computed: true, optional: true, required: false
    private _postTrainingConstraints = new MetricsSourcePropertyOutputReference(this, "post_training_constraints");
    public get postTrainingConstraints() {
        return this._postTrainingConstraints;
    }
    public putPostTrainingConstraints(value: MetricsSourceProperty) {
        this._postTrainingConstraints.internalValue = value;
    }
    public resetPostTrainingConstraints() {
        this._postTrainingConstraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postTrainingConstraintsInput() {
        return this._postTrainingConstraints.internalValue;
    }

    // pre_training_constraints - computed: true, optional: true, required: false
    private _preTrainingConstraints = new PreTrainingConstraintsPropertyOutputReference(this, "pre_training_constraints");
    public get preTrainingConstraints() {
        return this._preTrainingConstraints;
    }
    public putPreTrainingConstraints(value: PreTrainingConstraintsProperty) {
        this._preTrainingConstraints.internalValue = value;
    }
    public resetPreTrainingConstraints() {
        this._preTrainingConstraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preTrainingConstraintsInput() {
        return this._preTrainingConstraints.internalValue;
    }
}
export interface ConfigFileProperty {
    /**
    * The digest of the file source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the file source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the file source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class ConfigFilePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ConfigFileProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ConfigFileProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface DriftCheckBaselinesExplainabilityConstraintsProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class DriftCheckBaselinesExplainabilityConstraintsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DriftCheckBaselinesExplainabilityConstraintsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DriftCheckBaselinesExplainabilityConstraintsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface DriftCheckExplainabilityProperty {
    /**
    * Represents a File Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#config_file CcModelPackage#config_file}
    */
    readonly configFile?: ConfigFileProperty;
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#constraints CcModelPackage#constraints}
    */
    readonly constraints?: DriftCheckBaselinesExplainabilityConstraintsProperty;
}
export class DriftCheckExplainabilityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DriftCheckExplainabilityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._configFile?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.configFile = this._configFile?.internalValue;
        }
        if (this._constraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraints = this._constraints?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DriftCheckExplainabilityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._configFile.internalValue = undefined;
            this._constraints.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._configFile.internalValue = value.configFile;
            this._constraints.internalValue = value.constraints;
        }
    }

    // config_file - computed: true, optional: true, required: false
    private _configFile = new ConfigFilePropertyOutputReference(this, "config_file");
    public get configFile() {
        return this._configFile;
    }
    public putConfigFile(value: ConfigFileProperty) {
        this._configFile.internalValue = value;
    }
    public resetConfigFile() {
        this._configFile.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get configFileInput() {
        return this._configFile.internalValue;
    }

    // constraints - computed: true, optional: true, required: false
    private _constraints = new DriftCheckBaselinesExplainabilityConstraintsPropertyOutputReference(this, "constraints");
    public get constraints() {
        return this._constraints;
    }
    public putConstraints(value: DriftCheckBaselinesExplainabilityConstraintsProperty) {
        this._constraints.internalValue = value;
    }
    public resetConstraints() {
        this._constraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintsInput() {
        return this._constraints.internalValue;
    }
}
export interface DriftCheckBaselinesModelDataQualityConstraintsProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class DriftCheckBaselinesModelDataQualityConstraintsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DriftCheckBaselinesModelDataQualityConstraintsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DriftCheckBaselinesModelDataQualityConstraintsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface DriftCheckBaselinesModelDataQualityStatisticsProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class DriftCheckBaselinesModelDataQualityStatisticsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DriftCheckBaselinesModelDataQualityStatisticsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DriftCheckBaselinesModelDataQualityStatisticsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface DriftCheckModelDataQualityProperty {
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#constraints CcModelPackage#constraints}
    */
    readonly constraints?: DriftCheckBaselinesModelDataQualityConstraintsProperty;
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#statistics CcModelPackage#statistics}
    */
    readonly statistics?: DriftCheckBaselinesModelDataQualityStatisticsProperty;
}
export class DriftCheckModelDataQualityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DriftCheckModelDataQualityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraints = this._constraints?.internalValue;
        }
        if (this._statistics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistics = this._statistics?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DriftCheckModelDataQualityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraints.internalValue = undefined;
            this._statistics.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraints.internalValue = value.constraints;
            this._statistics.internalValue = value.statistics;
        }
    }

    // constraints - computed: true, optional: true, required: false
    private _constraints = new DriftCheckBaselinesModelDataQualityConstraintsPropertyOutputReference(this, "constraints");
    public get constraints() {
        return this._constraints;
    }
    public putConstraints(value: DriftCheckBaselinesModelDataQualityConstraintsProperty) {
        this._constraints.internalValue = value;
    }
    public resetConstraints() {
        this._constraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintsInput() {
        return this._constraints.internalValue;
    }

    // statistics - computed: true, optional: true, required: false
    private _statistics = new DriftCheckBaselinesModelDataQualityStatisticsPropertyOutputReference(this, "statistics");
    public get statistics() {
        return this._statistics;
    }
    public putStatistics(value: DriftCheckBaselinesModelDataQualityStatisticsProperty) {
        this._statistics.internalValue = value;
    }
    public resetStatistics() {
        this._statistics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticsInput() {
        return this._statistics.internalValue;
    }
}
export interface DriftCheckBaselinesModelQualityConstraintsProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class DriftCheckBaselinesModelQualityConstraintsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DriftCheckBaselinesModelQualityConstraintsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DriftCheckBaselinesModelQualityConstraintsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface DriftCheckBaselinesModelQualityStatisticsProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class DriftCheckBaselinesModelQualityStatisticsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DriftCheckBaselinesModelQualityStatisticsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DriftCheckBaselinesModelQualityStatisticsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface DriftCheckModelQualityProperty {
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#constraints CcModelPackage#constraints}
    */
    readonly constraints?: DriftCheckBaselinesModelQualityConstraintsProperty;
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#statistics CcModelPackage#statistics}
    */
    readonly statistics?: DriftCheckBaselinesModelQualityStatisticsProperty;
}
export class DriftCheckModelQualityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DriftCheckModelQualityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraints = this._constraints?.internalValue;
        }
        if (this._statistics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistics = this._statistics?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DriftCheckModelQualityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraints.internalValue = undefined;
            this._statistics.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraints.internalValue = value.constraints;
            this._statistics.internalValue = value.statistics;
        }
    }

    // constraints - computed: true, optional: true, required: false
    private _constraints = new DriftCheckBaselinesModelQualityConstraintsPropertyOutputReference(this, "constraints");
    public get constraints() {
        return this._constraints;
    }
    public putConstraints(value: DriftCheckBaselinesModelQualityConstraintsProperty) {
        this._constraints.internalValue = value;
    }
    public resetConstraints() {
        this._constraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintsInput() {
        return this._constraints.internalValue;
    }

    // statistics - computed: true, optional: true, required: false
    private _statistics = new DriftCheckBaselinesModelQualityStatisticsPropertyOutputReference(this, "statistics");
    public get statistics() {
        return this._statistics;
    }
    public putStatistics(value: DriftCheckBaselinesModelQualityStatisticsProperty) {
        this._statistics.internalValue = value;
    }
    public resetStatistics() {
        this._statistics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticsInput() {
        return this._statistics.internalValue;
    }
}
export interface DriftCheckBaselinesProperty {
    /**
    * Represents the drift check bias baselines that can be used when the model monitor is set using the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#bias CcModelPackage#bias}
    */
    readonly bias?: DriftCheckBiasProperty;
    /**
    * Contains explainability metrics for a model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#explainability CcModelPackage#explainability}
    */
    readonly explainability?: DriftCheckExplainabilityProperty;
    /**
    * Represents the drift check data quality baselines that can be used when the model monitor is set using the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_data_quality CcModelPackage#model_data_quality}
    */
    readonly modelDataQuality?: DriftCheckModelDataQualityProperty;
    /**
    * Represents the drift check model quality baselines that can be used when the model monitor is set using the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_quality CcModelPackage#model_quality}
    */
    readonly modelQuality?: DriftCheckModelQualityProperty;
}
export class DriftCheckBaselinesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DriftCheckBaselinesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bias?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bias = this._bias?.internalValue;
        }
        if (this._explainability?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.explainability = this._explainability?.internalValue;
        }
        if (this._modelDataQuality?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataQuality = this._modelDataQuality?.internalValue;
        }
        if (this._modelQuality?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelQuality = this._modelQuality?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DriftCheckBaselinesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bias.internalValue = undefined;
            this._explainability.internalValue = undefined;
            this._modelDataQuality.internalValue = undefined;
            this._modelQuality.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bias.internalValue = value.bias;
            this._explainability.internalValue = value.explainability;
            this._modelDataQuality.internalValue = value.modelDataQuality;
            this._modelQuality.internalValue = value.modelQuality;
        }
    }

    // bias - computed: true, optional: true, required: false
    private _bias = new DriftCheckBiasPropertyOutputReference(this, "bias");
    public get bias() {
        return this._bias;
    }
    public putBias(value: DriftCheckBiasProperty) {
        this._bias.internalValue = value;
    }
    public resetBias() {
        this._bias.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get biasInput() {
        return this._bias.internalValue;
    }

    // explainability - computed: true, optional: true, required: false
    private _explainability = new DriftCheckExplainabilityPropertyOutputReference(this, "explainability");
    public get explainability() {
        return this._explainability;
    }
    public putExplainability(value: DriftCheckExplainabilityProperty) {
        this._explainability.internalValue = value;
    }
    public resetExplainability() {
        this._explainability.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get explainabilityInput() {
        return this._explainability.internalValue;
    }

    // model_data_quality - computed: true, optional: true, required: false
    private _modelDataQuality = new DriftCheckModelDataQualityPropertyOutputReference(this, "model_data_quality");
    public get modelDataQuality() {
        return this._modelDataQuality;
    }
    public putModelDataQuality(value: DriftCheckModelDataQualityProperty) {
        this._modelDataQuality.internalValue = value;
    }
    public resetModelDataQuality() {
        this._modelDataQuality.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataQualityInput() {
        return this._modelDataQuality.internalValue;
    }

    // model_quality - computed: true, optional: true, required: false
    private _modelQuality = new DriftCheckModelQualityPropertyOutputReference(this, "model_quality");
    public get modelQuality() {
        return this._modelQuality;
    }
    public putModelQuality(value: DriftCheckModelQualityProperty) {
        this._modelQuality.internalValue = value;
    }
    public resetModelQuality() {
        this._modelQuality.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelQualityInput() {
        return this._modelQuality.internalValue;
    }
}
export interface InferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigProperty {
    /**
    * Specifies agreement to the model end-user license agreement (EULA).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#accept_eula CcModelPackage#accept_eula}
    */
    readonly acceptEula?: boolean | cdktn.IResolvable;
}
export class InferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._acceptEula !== undefined) {
            hasAnyValues = true;
            internalValueResult.acceptEula = this._acceptEula;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._acceptEula = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._acceptEula = value.acceptEula;
        }
    }

    // accept_eula - computed: true, optional: true, required: false
    private _acceptEula?: boolean | cdktn.IResolvable; 
    public get acceptEula() {
        return this.getBooleanAttribute('accept_eula');
    }
    public set acceptEula(value: boolean | cdktn.IResolvable) {
        this._acceptEula = value;
    }
    public resetAcceptEula() {
        this._acceptEula = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptEulaInput() {
        return this._acceptEula;
    }
}
export interface InferenceSpecificationContainersModelDataSourceS3DataSourceProperty {
    /**
    * Specifies how the ML model data is prepared.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#compression_type CcModelPackage#compression_type}
    */
    readonly compressionType?: string;
    /**
    * Specifies the access configuration file for the ML model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_access_config CcModelPackage#model_access_config}
    */
    readonly modelAccessConfig?: InferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigProperty;
    /**
    * Specifies the type of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_data_type CcModelPackage#s3_data_type}
    */
    readonly s3DataType?: string;
    /**
    * Specifies the S3 path of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class InferenceSpecificationContainersModelDataSourceS3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceSpecificationContainersModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._modelAccessConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelAccessConfig = this._modelAccessConfig?.internalValue;
        }
        if (this._s3DataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataType = this._s3DataType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceSpecificationContainersModelDataSourceS3DataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compressionType = undefined;
            this._modelAccessConfig.internalValue = undefined;
            this._s3DataType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compressionType = value.compressionType;
            this._modelAccessConfig.internalValue = value.modelAccessConfig;
            this._s3DataType = value.s3DataType;
            this._s3Uri = value.s3Uri;
        }
    }

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
    }

    // model_access_config - computed: true, optional: true, required: false
    private _modelAccessConfig = new InferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigPropertyOutputReference(this, "model_access_config");
    public get modelAccessConfig() {
        return this._modelAccessConfig;
    }
    public putModelAccessConfig(value: InferenceSpecificationContainersModelDataSourceS3DataSourceModelAccessConfigProperty) {
        this._modelAccessConfig.internalValue = value;
    }
    public resetModelAccessConfig() {
        this._modelAccessConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelAccessConfigInput() {
        return this._modelAccessConfig.internalValue;
    }

    // s3_data_type - computed: true, optional: true, required: false
    private _s3DataType?: string; 
    public get s3DataType() {
        return this.getStringAttribute('s3_data_type');
    }
    public set s3DataType(value: string) {
        this._s3DataType = value;
    }
    public resetS3DataType() {
        this._s3DataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataTypeInput() {
        return this._s3DataType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface InferenceSpecificationContainersModelDataSourceProperty {
    /**
    * Specifies the S3 location of ML model data to deploy.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_data_source CcModelPackage#s3_data_source}
    */
    readonly s3DataSource?: InferenceSpecificationContainersModelDataSourceS3DataSourceProperty;
}
export class InferenceSpecificationContainersModelDataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceSpecificationContainersModelDataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3DataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceSpecificationContainersModelDataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = value.s3DataSource;
        }
    }

    // s3_data_source - computed: true, optional: true, required: false
    private _s3DataSource = new InferenceSpecificationContainersModelDataSourceS3DataSourcePropertyOutputReference(this, "s3_data_source");
    public get s3DataSource() {
        return this._s3DataSource;
    }
    public putS3DataSource(value: InferenceSpecificationContainersModelDataSourceS3DataSourceProperty) {
        this._s3DataSource.internalValue = value;
    }
    public resetS3DataSource() {
        this._s3DataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataSourceInput() {
        return this._s3DataSource.internalValue;
    }
}
export interface InferenceSpecificationContainersModelInputProperty {
    /**
    * The input configuration object for the model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#data_input_config CcModelPackage#data_input_config}
    */
    readonly dataInputConfig?: string;
}
export class InferenceSpecificationContainersModelInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceSpecificationContainersModelInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._dataInputConfig !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataInputConfig = this._dataInputConfig;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceSpecificationContainersModelInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._dataInputConfig = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._dataInputConfig = value.dataInputConfig;
        }
    }

    // data_input_config - computed: true, optional: true, required: false
    private _dataInputConfig?: string; 
    public get dataInputConfig() {
        return this.getStringAttribute('data_input_config');
    }
    public set dataInputConfig(value: string) {
        this._dataInputConfig = value;
    }
    public resetDataInputConfig() {
        this._dataInputConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataInputConfigInput() {
        return this._dataInputConfig;
    }
}
export interface InferenceSpecificationContainersProperty {
    /**
    * The DNS host name for the Docker container.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#container_hostname CcModelPackage#container_hostname}
    */
    readonly containerHostname?: string;
    /**
    * Sets the environment variables in the Docker container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#environment CcModelPackage#environment}
    */
    readonly environment?: { [key: string]: string };
    /**
    * The machine learning framework of the model package container image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#framework CcModelPackage#framework}
    */
    readonly framework?: string;
    /**
    * The framework version of the Model Package Container Image.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#framework_version CcModelPackage#framework_version}
    */
    readonly frameworkVersion?: string;
    /**
    * The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#image CcModelPackage#image}
    */
    readonly image?: string;
    /**
    * An MD5 hash of the training algorithm that identifies the Docker image used for training.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#image_digest CcModelPackage#image_digest}
    */
    readonly imageDigest?: string;
    /**
    * Specifies the location of ML model data to deploy during endpoint creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_data_source CcModelPackage#model_data_source}
    */
    readonly modelDataSource?: InferenceSpecificationContainersModelDataSourceProperty;
    /**
    * A structure with Model Input details.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_data_url CcModelPackage#model_data_url}
    */
    readonly modelDataUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_input CcModelPackage#model_input}
    */
    readonly modelInput?: InferenceSpecificationContainersModelInputProperty;
    /**
    * The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#nearest_model_name CcModelPackage#nearest_model_name}
    */
    readonly nearestModelName?: string;
}
export class InferenceSpecificationContainersPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): InferenceSpecificationContainersProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containerHostname !== undefined) {
            hasAnyValues = true;
            internalValueResult.containerHostname = this._containerHostname;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._framework !== undefined) {
            hasAnyValues = true;
            internalValueResult.framework = this._framework;
        }
        if (this._frameworkVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.frameworkVersion = this._frameworkVersion;
        }
        if (this._image !== undefined) {
            hasAnyValues = true;
            internalValueResult.image = this._image;
        }
        if (this._imageDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageDigest = this._imageDigest;
        }
        if (this._modelDataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataSource = this._modelDataSource?.internalValue;
        }
        if (this._modelDataUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataUrl = this._modelDataUrl;
        }
        if (this._modelInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelInput = this._modelInput?.internalValue;
        }
        if (this._nearestModelName !== undefined) {
            hasAnyValues = true;
            internalValueResult.nearestModelName = this._nearestModelName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceSpecificationContainersProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containerHostname = undefined;
            this._environment = undefined;
            this._framework = undefined;
            this._frameworkVersion = undefined;
            this._image = undefined;
            this._imageDigest = undefined;
            this._modelDataSource.internalValue = undefined;
            this._modelDataUrl = undefined;
            this._modelInput.internalValue = undefined;
            this._nearestModelName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containerHostname = value.containerHostname;
            this._environment = value.environment;
            this._framework = value.framework;
            this._frameworkVersion = value.frameworkVersion;
            this._image = value.image;
            this._imageDigest = value.imageDigest;
            this._modelDataSource.internalValue = value.modelDataSource;
            this._modelDataUrl = value.modelDataUrl;
            this._modelInput.internalValue = value.modelInput;
            this._nearestModelName = value.nearestModelName;
        }
    }

    // container_hostname - computed: true, optional: true, required: false
    private _containerHostname?: string; 
    public get containerHostname() {
        return this.getStringAttribute('container_hostname');
    }
    public set containerHostname(value: string) {
        this._containerHostname = value;
    }
    public resetContainerHostname() {
        this._containerHostname = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containerHostnameInput() {
        return this._containerHostname;
    }

    // environment - computed: true, optional: true, required: false
    private _environment?: { [key: string]: string }; 
    public get environment() {
        return this.getStringMapAttribute('environment');
    }
    public set environment(value: { [key: string]: string }) {
        this._environment = value;
    }
    public resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment;
    }

    // framework - computed: true, optional: true, required: false
    private _framework?: string; 
    public get framework() {
        return this.getStringAttribute('framework');
    }
    public set framework(value: string) {
        this._framework = value;
    }
    public resetFramework() {
        this._framework = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkInput() {
        return this._framework;
    }

    // framework_version - computed: true, optional: true, required: false
    private _frameworkVersion?: string; 
    public get frameworkVersion() {
        return this.getStringAttribute('framework_version');
    }
    public set frameworkVersion(value: string) {
        this._frameworkVersion = value;
    }
    public resetFrameworkVersion() {
        this._frameworkVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frameworkVersionInput() {
        return this._frameworkVersion;
    }

    // image - computed: true, optional: true, required: false
    private _image?: string; 
    public get image() {
        return this.getStringAttribute('image');
    }
    public set image(value: string) {
        this._image = value;
    }
    public resetImage() {
        this._image = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageInput() {
        return this._image;
    }

    // image_digest - computed: true, optional: true, required: false
    private _imageDigest?: string; 
    public get imageDigest() {
        return this.getStringAttribute('image_digest');
    }
    public set imageDigest(value: string) {
        this._imageDigest = value;
    }
    public resetImageDigest() {
        this._imageDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageDigestInput() {
        return this._imageDigest;
    }

    // model_data_source - computed: true, optional: true, required: false
    private _modelDataSource = new InferenceSpecificationContainersModelDataSourcePropertyOutputReference(this, "model_data_source");
    public get modelDataSource() {
        return this._modelDataSource;
    }
    public putModelDataSource(value: InferenceSpecificationContainersModelDataSourceProperty) {
        this._modelDataSource.internalValue = value;
    }
    public resetModelDataSource() {
        this._modelDataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataSourceInput() {
        return this._modelDataSource.internalValue;
    }

    // model_data_url - computed: true, optional: true, required: false
    private _modelDataUrl?: string; 
    public get modelDataUrl() {
        return this.getStringAttribute('model_data_url');
    }
    public set modelDataUrl(value: string) {
        this._modelDataUrl = value;
    }
    public resetModelDataUrl() {
        this._modelDataUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataUrlInput() {
        return this._modelDataUrl;
    }

    // model_input - computed: true, optional: true, required: false
    private _modelInput = new InferenceSpecificationContainersModelInputPropertyOutputReference(this, "model_input");
    public get modelInput() {
        return this._modelInput;
    }
    public putModelInput(value: InferenceSpecificationContainersModelInputProperty) {
        this._modelInput.internalValue = value;
    }
    public resetModelInput() {
        this._modelInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInputInput() {
        return this._modelInput.internalValue;
    }

    // nearest_model_name - computed: true, optional: true, required: false
    private _nearestModelName?: string; 
    public get nearestModelName() {
        return this.getStringAttribute('nearest_model_name');
    }
    public set nearestModelName(value: string) {
        this._nearestModelName = value;
    }
    public resetNearestModelName() {
        this._nearestModelName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nearestModelNameInput() {
        return this._nearestModelName;
    }
}

export class InferenceSpecificationContainersPropertyList extends cdktn.ComplexList {
    public internalValue? : InferenceSpecificationContainersProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): InferenceSpecificationContainersPropertyOutputReference {
        return new InferenceSpecificationContainersPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface InferenceSpecificationProperty {
    /**
    * The Amazon ECR registry path of the Docker image that contains the inference code.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#containers CcModelPackage#containers}
    */
    readonly containers?: InferenceSpecificationContainersProperty[] | cdktn.IResolvable;
    /**
    * The supported MIME types for the input data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_content_types CcModelPackage#supported_content_types}
    */
    readonly supportedContentTypes?: string[];
    /**
    * A list of the instance types that are used to generate inferences in real-time
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_realtime_inference_instance_types CcModelPackage#supported_realtime_inference_instance_types}
    */
    readonly supportedRealtimeInferenceInstanceTypes?: string[];
    /**
    * The supported MIME types for the output data.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_response_mime_types CcModelPackage#supported_response_mime_types}
    */
    readonly supportedResponseMimeTypes?: string[];
    /**
    * A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#supported_transform_instance_types CcModelPackage#supported_transform_instance_types}
    */
    readonly supportedTransformInstanceTypes?: string[];
}
export class InferenceSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InferenceSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._containers?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.containers = this._containers?.internalValue;
        }
        if (this._supportedContentTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedContentTypes = this._supportedContentTypes;
        }
        if (this._supportedRealtimeInferenceInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedRealtimeInferenceInstanceTypes = this._supportedRealtimeInferenceInstanceTypes;
        }
        if (this._supportedResponseMimeTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedResponseMimeTypes = this._supportedResponseMimeTypes;
        }
        if (this._supportedTransformInstanceTypes !== undefined) {
            hasAnyValues = true;
            internalValueResult.supportedTransformInstanceTypes = this._supportedTransformInstanceTypes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InferenceSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._containers.internalValue = undefined;
            this._supportedContentTypes = undefined;
            this._supportedRealtimeInferenceInstanceTypes = undefined;
            this._supportedResponseMimeTypes = undefined;
            this._supportedTransformInstanceTypes = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._containers.internalValue = value.containers;
            this._supportedContentTypes = value.supportedContentTypes;
            this._supportedRealtimeInferenceInstanceTypes = value.supportedRealtimeInferenceInstanceTypes;
            this._supportedResponseMimeTypes = value.supportedResponseMimeTypes;
            this._supportedTransformInstanceTypes = value.supportedTransformInstanceTypes;
        }
    }

    // containers - computed: true, optional: true, required: false
    private _containers = new InferenceSpecificationContainersPropertyList(this, "containers", false);
    public get containers() {
        return this._containers;
    }
    public putContainers(value: InferenceSpecificationContainersProperty[] | cdktn.IResolvable) {
        this._containers.internalValue = value;
    }
    public resetContainers() {
        this._containers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get containersInput() {
        return this._containers.internalValue;
    }

    // supported_content_types - computed: true, optional: true, required: false
    private _supportedContentTypes?: string[]; 
    public get supportedContentTypes() {
        return this.getListAttribute('supported_content_types');
    }
    public set supportedContentTypes(value: string[]) {
        this._supportedContentTypes = value;
    }
    public resetSupportedContentTypes() {
        this._supportedContentTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedContentTypesInput() {
        return this._supportedContentTypes;
    }

    // supported_realtime_inference_instance_types - computed: true, optional: true, required: false
    private _supportedRealtimeInferenceInstanceTypes?: string[]; 
    public get supportedRealtimeInferenceInstanceTypes() {
        return this.getListAttribute('supported_realtime_inference_instance_types');
    }
    public set supportedRealtimeInferenceInstanceTypes(value: string[]) {
        this._supportedRealtimeInferenceInstanceTypes = value;
    }
    public resetSupportedRealtimeInferenceInstanceTypes() {
        this._supportedRealtimeInferenceInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedRealtimeInferenceInstanceTypesInput() {
        return this._supportedRealtimeInferenceInstanceTypes;
    }

    // supported_response_mime_types - computed: true, optional: true, required: false
    private _supportedResponseMimeTypes?: string[]; 
    public get supportedResponseMimeTypes() {
        return this.getListAttribute('supported_response_mime_types');
    }
    public set supportedResponseMimeTypes(value: string[]) {
        this._supportedResponseMimeTypes = value;
    }
    public resetSupportedResponseMimeTypes() {
        this._supportedResponseMimeTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedResponseMimeTypesInput() {
        return this._supportedResponseMimeTypes;
    }

    // supported_transform_instance_types - computed: true, optional: true, required: false
    private _supportedTransformInstanceTypes?: string[]; 
    public get supportedTransformInstanceTypes() {
        return this.getListAttribute('supported_transform_instance_types');
    }
    public set supportedTransformInstanceTypes(value: string[]) {
        this._supportedTransformInstanceTypes = value;
    }
    public resetSupportedTransformInstanceTypes() {
        this._supportedTransformInstanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get supportedTransformInstanceTypesInput() {
        return this._supportedTransformInstanceTypes;
    }
}
export interface MetadataPropertiesProperty {
    /**
    * The commit ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#commit_id CcModelPackage#commit_id}
    */
    readonly commitId?: string;
    /**
    * The entity this entity was generated by.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#generated_by CcModelPackage#generated_by}
    */
    readonly generatedBy?: string;
    /**
    * The project ID metadata.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#project_id CcModelPackage#project_id}
    */
    readonly projectId?: string;
    /**
    * The repository metadata.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#repository CcModelPackage#repository}
    */
    readonly repository?: string;
}
export class MetadataPropertiesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MetadataPropertiesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._commitId !== undefined) {
            hasAnyValues = true;
            internalValueResult.commitId = this._commitId;
        }
        if (this._generatedBy !== undefined) {
            hasAnyValues = true;
            internalValueResult.generatedBy = this._generatedBy;
        }
        if (this._projectId !== undefined) {
            hasAnyValues = true;
            internalValueResult.projectId = this._projectId;
        }
        if (this._repository !== undefined) {
            hasAnyValues = true;
            internalValueResult.repository = this._repository;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MetadataPropertiesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._commitId = undefined;
            this._generatedBy = undefined;
            this._projectId = undefined;
            this._repository = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._commitId = value.commitId;
            this._generatedBy = value.generatedBy;
            this._projectId = value.projectId;
            this._repository = value.repository;
        }
    }

    // commit_id - computed: true, optional: true, required: false
    private _commitId?: string; 
    public get commitId() {
        return this.getStringAttribute('commit_id');
    }
    public set commitId(value: string) {
        this._commitId = value;
    }
    public resetCommitId() {
        this._commitId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get commitIdInput() {
        return this._commitId;
    }

    // generated_by - computed: true, optional: true, required: false
    private _generatedBy?: string; 
    public get generatedBy() {
        return this.getStringAttribute('generated_by');
    }
    public set generatedBy(value: string) {
        this._generatedBy = value;
    }
    public resetGeneratedBy() {
        this._generatedBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get generatedByInput() {
        return this._generatedBy;
    }

    // project_id - computed: true, optional: true, required: false
    private _projectId?: string; 
    public get projectId() {
        return this.getStringAttribute('project_id');
    }
    public set projectId(value: string) {
        this._projectId = value;
    }
    public resetProjectId() {
        this._projectId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get projectIdInput() {
        return this._projectId;
    }

    // repository - computed: true, optional: true, required: false
    private _repository?: string; 
    public get repository() {
        return this.getStringAttribute('repository');
    }
    public set repository(value: string) {
        this._repository = value;
    }
    public resetRepository() {
        this._repository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryInput() {
        return this._repository;
    }
}
export interface ModelCardProperty {
    /**
    * The content of the model card.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_card_content CcModelPackage#model_card_content}
    */
    readonly modelCardContent?: string;
    /**
    * The approval status of the model card within your organization.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_card_status CcModelPackage#model_card_status}
    */
    readonly modelCardStatus?: string;
}
export class ModelCardPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelCardProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._modelCardContent !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelCardContent = this._modelCardContent;
        }
        if (this._modelCardStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelCardStatus = this._modelCardStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelCardProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._modelCardContent = undefined;
            this._modelCardStatus = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._modelCardContent = value.modelCardContent;
            this._modelCardStatus = value.modelCardStatus;
        }
    }

    // model_card_content - computed: true, optional: true, required: false
    private _modelCardContent?: string; 
    public get modelCardContent() {
        return this.getStringAttribute('model_card_content');
    }
    public set modelCardContent(value: string) {
        this._modelCardContent = value;
    }
    public resetModelCardContent() {
        this._modelCardContent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelCardContentInput() {
        return this._modelCardContent;
    }

    // model_card_status - computed: true, optional: true, required: false
    private _modelCardStatus?: string; 
    public get modelCardStatus() {
        return this.getStringAttribute('model_card_status');
    }
    public set modelCardStatus(value: string) {
        this._modelCardStatus = value;
    }
    public resetModelCardStatus() {
        this._modelCardStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelCardStatusInput() {
        return this._modelCardStatus;
    }
}
export interface PostTrainingReportProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class PostTrainingReportPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PostTrainingReportProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PostTrainingReportProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface PreTrainingReportProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class PreTrainingReportPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PreTrainingReportProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PreTrainingReportProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface ModelMetricsBiasReportProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class ModelMetricsBiasReportPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelMetricsBiasReportProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelMetricsBiasReportProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface BiasProperty {
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#post_training_report CcModelPackage#post_training_report}
    */
    readonly postTrainingReport?: PostTrainingReportProperty;
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#pre_training_report CcModelPackage#pre_training_report}
    */
    readonly preTrainingReport?: PreTrainingReportProperty;
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#report CcModelPackage#report}
    */
    readonly report?: ModelMetricsBiasReportProperty;
}
export class BiasPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BiasProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._postTrainingReport?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.postTrainingReport = this._postTrainingReport?.internalValue;
        }
        if (this._preTrainingReport?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.preTrainingReport = this._preTrainingReport?.internalValue;
        }
        if (this._report?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.report = this._report?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BiasProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._postTrainingReport.internalValue = undefined;
            this._preTrainingReport.internalValue = undefined;
            this._report.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._postTrainingReport.internalValue = value.postTrainingReport;
            this._preTrainingReport.internalValue = value.preTrainingReport;
            this._report.internalValue = value.report;
        }
    }

    // post_training_report - computed: true, optional: true, required: false
    private _postTrainingReport = new PostTrainingReportPropertyOutputReference(this, "post_training_report");
    public get postTrainingReport() {
        return this._postTrainingReport;
    }
    public putPostTrainingReport(value: PostTrainingReportProperty) {
        this._postTrainingReport.internalValue = value;
    }
    public resetPostTrainingReport() {
        this._postTrainingReport.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get postTrainingReportInput() {
        return this._postTrainingReport.internalValue;
    }

    // pre_training_report - computed: true, optional: true, required: false
    private _preTrainingReport = new PreTrainingReportPropertyOutputReference(this, "pre_training_report");
    public get preTrainingReport() {
        return this._preTrainingReport;
    }
    public putPreTrainingReport(value: PreTrainingReportProperty) {
        this._preTrainingReport.internalValue = value;
    }
    public resetPreTrainingReport() {
        this._preTrainingReport.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get preTrainingReportInput() {
        return this._preTrainingReport.internalValue;
    }

    // report - computed: true, optional: true, required: false
    private _report = new ModelMetricsBiasReportPropertyOutputReference(this, "report");
    public get report() {
        return this._report;
    }
    public putReport(value: ModelMetricsBiasReportProperty) {
        this._report.internalValue = value;
    }
    public resetReport() {
        this._report.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportInput() {
        return this._report.internalValue;
    }
}
export interface ModelMetricsExplainabilityReportProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class ModelMetricsExplainabilityReportPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelMetricsExplainabilityReportProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelMetricsExplainabilityReportProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface ExplainabilityProperty {
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#report CcModelPackage#report}
    */
    readonly report?: ModelMetricsExplainabilityReportProperty;
}
export class ExplainabilityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExplainabilityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._report?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.report = this._report?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExplainabilityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._report.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._report.internalValue = value.report;
        }
    }

    // report - computed: true, optional: true, required: false
    private _report = new ModelMetricsExplainabilityReportPropertyOutputReference(this, "report");
    public get report() {
        return this._report;
    }
    public putReport(value: ModelMetricsExplainabilityReportProperty) {
        this._report.internalValue = value;
    }
    public resetReport() {
        this._report.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get reportInput() {
        return this._report.internalValue;
    }
}
export interface ModelMetricsModelDataQualityConstraintsProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class ModelMetricsModelDataQualityConstraintsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelMetricsModelDataQualityConstraintsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelMetricsModelDataQualityConstraintsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface ModelMetricsModelDataQualityStatisticsProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class ModelMetricsModelDataQualityStatisticsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelMetricsModelDataQualityStatisticsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelMetricsModelDataQualityStatisticsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface ModelDataQualityProperty {
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#constraints CcModelPackage#constraints}
    */
    readonly constraints?: ModelMetricsModelDataQualityConstraintsProperty;
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#statistics CcModelPackage#statistics}
    */
    readonly statistics?: ModelMetricsModelDataQualityStatisticsProperty;
}
export class ModelDataQualityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelDataQualityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraints = this._constraints?.internalValue;
        }
        if (this._statistics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistics = this._statistics?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelDataQualityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraints.internalValue = undefined;
            this._statistics.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraints.internalValue = value.constraints;
            this._statistics.internalValue = value.statistics;
        }
    }

    // constraints - computed: true, optional: true, required: false
    private _constraints = new ModelMetricsModelDataQualityConstraintsPropertyOutputReference(this, "constraints");
    public get constraints() {
        return this._constraints;
    }
    public putConstraints(value: ModelMetricsModelDataQualityConstraintsProperty) {
        this._constraints.internalValue = value;
    }
    public resetConstraints() {
        this._constraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintsInput() {
        return this._constraints.internalValue;
    }

    // statistics - computed: true, optional: true, required: false
    private _statistics = new ModelMetricsModelDataQualityStatisticsPropertyOutputReference(this, "statistics");
    public get statistics() {
        return this._statistics;
    }
    public putStatistics(value: ModelMetricsModelDataQualityStatisticsProperty) {
        this._statistics.internalValue = value;
    }
    public resetStatistics() {
        this._statistics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticsInput() {
        return this._statistics.internalValue;
    }
}
export interface ModelMetricsModelQualityConstraintsProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class ModelMetricsModelQualityConstraintsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelMetricsModelQualityConstraintsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelMetricsModelQualityConstraintsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface ModelMetricsModelQualityStatisticsProperty {
    /**
    * The digest of the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_digest CcModelPackage#content_digest}
    */
    readonly contentDigest?: string;
    /**
    * The type of content stored in the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * The Amazon S3 URI for the metric source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class ModelMetricsModelQualityStatisticsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelMetricsModelQualityStatisticsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contentDigest !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentDigest = this._contentDigest;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelMetricsModelQualityStatisticsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contentDigest = undefined;
            this._contentType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contentDigest = value.contentDigest;
            this._contentType = value.contentType;
            this._s3Uri = value.s3Uri;
        }
    }

    // content_digest - computed: true, optional: true, required: false
    private _contentDigest?: string; 
    public get contentDigest() {
        return this.getStringAttribute('content_digest');
    }
    public set contentDigest(value: string) {
        this._contentDigest = value;
    }
    public resetContentDigest() {
        this._contentDigest = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentDigestInput() {
        return this._contentDigest;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface ModelQualityProperty {
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#constraints CcModelPackage#constraints}
    */
    readonly constraints?: ModelMetricsModelQualityConstraintsProperty;
    /**
    * Represents a Metric Source Object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#statistics CcModelPackage#statistics}
    */
    readonly statistics?: ModelMetricsModelQualityStatisticsProperty;
}
export class ModelQualityPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelQualityProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._constraints?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.constraints = this._constraints?.internalValue;
        }
        if (this._statistics?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.statistics = this._statistics?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelQualityProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._constraints.internalValue = undefined;
            this._statistics.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._constraints.internalValue = value.constraints;
            this._statistics.internalValue = value.statistics;
        }
    }

    // constraints - computed: true, optional: true, required: false
    private _constraints = new ModelMetricsModelQualityConstraintsPropertyOutputReference(this, "constraints");
    public get constraints() {
        return this._constraints;
    }
    public putConstraints(value: ModelMetricsModelQualityConstraintsProperty) {
        this._constraints.internalValue = value;
    }
    public resetConstraints() {
        this._constraints.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get constraintsInput() {
        return this._constraints.internalValue;
    }

    // statistics - computed: true, optional: true, required: false
    private _statistics = new ModelMetricsModelQualityStatisticsPropertyOutputReference(this, "statistics");
    public get statistics() {
        return this._statistics;
    }
    public putStatistics(value: ModelMetricsModelQualityStatisticsProperty) {
        this._statistics.internalValue = value;
    }
    public resetStatistics() {
        this._statistics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statisticsInput() {
        return this._statistics.internalValue;
    }
}
export interface ModelMetricsProperty {
    /**
    * Contains bias metrics for a model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#bias CcModelPackage#bias}
    */
    readonly bias?: BiasProperty;
    /**
    * Contains explainability metrics for a model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#explainability CcModelPackage#explainability}
    */
    readonly explainability?: ExplainabilityProperty;
    /**
    * Metrics that measure the quality of the input data for a model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_data_quality CcModelPackage#model_data_quality}
    */
    readonly modelDataQuality?: ModelDataQualityProperty;
    /**
    * Metrics that measure the quality of a model.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_quality CcModelPackage#model_quality}
    */
    readonly modelQuality?: ModelQualityProperty;
}
export class ModelMetricsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelMetricsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bias?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.bias = this._bias?.internalValue;
        }
        if (this._explainability?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.explainability = this._explainability?.internalValue;
        }
        if (this._modelDataQuality?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataQuality = this._modelDataQuality?.internalValue;
        }
        if (this._modelQuality?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelQuality = this._modelQuality?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelMetricsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bias.internalValue = undefined;
            this._explainability.internalValue = undefined;
            this._modelDataQuality.internalValue = undefined;
            this._modelQuality.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bias.internalValue = value.bias;
            this._explainability.internalValue = value.explainability;
            this._modelDataQuality.internalValue = value.modelDataQuality;
            this._modelQuality.internalValue = value.modelQuality;
        }
    }

    // bias - computed: true, optional: true, required: false
    private _bias = new BiasPropertyOutputReference(this, "bias");
    public get bias() {
        return this._bias;
    }
    public putBias(value: BiasProperty) {
        this._bias.internalValue = value;
    }
    public resetBias() {
        this._bias.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get biasInput() {
        return this._bias.internalValue;
    }

    // explainability - computed: true, optional: true, required: false
    private _explainability = new ExplainabilityPropertyOutputReference(this, "explainability");
    public get explainability() {
        return this._explainability;
    }
    public putExplainability(value: ExplainabilityProperty) {
        this._explainability.internalValue = value;
    }
    public resetExplainability() {
        this._explainability.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get explainabilityInput() {
        return this._explainability.internalValue;
    }

    // model_data_quality - computed: true, optional: true, required: false
    private _modelDataQuality = new ModelDataQualityPropertyOutputReference(this, "model_data_quality");
    public get modelDataQuality() {
        return this._modelDataQuality;
    }
    public putModelDataQuality(value: ModelDataQualityProperty) {
        this._modelDataQuality.internalValue = value;
    }
    public resetModelDataQuality() {
        this._modelDataQuality.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataQualityInput() {
        return this._modelDataQuality.internalValue;
    }

    // model_quality - computed: true, optional: true, required: false
    private _modelQuality = new ModelQualityPropertyOutputReference(this, "model_quality");
    public get modelQuality() {
        return this._modelQuality;
    }
    public putModelQuality(value: ModelQualityProperty) {
        this._modelQuality.internalValue = value;
    }
    public resetModelQuality() {
        this._modelQuality.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelQualityInput() {
        return this._modelQuality.internalValue;
    }
}
export interface ModelPackageStatusItemProperty {
    /**
    * If the overall status is Failed, the reason for the failure.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#failure_reason CcModelPackage#failure_reason}
    */
    readonly failureReason?: string;
    /**
    * The name of the model package for which the overall status is being reported.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#name CcModelPackage#name}
    */
    readonly name?: string;
    /**
    * The current status.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#status CcModelPackage#status}
    */
    readonly status?: string;
}
export class ModelPackageStatusItemPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ModelPackageStatusItemProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._failureReason !== undefined) {
            hasAnyValues = true;
            internalValueResult.failureReason = this._failureReason;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._status !== undefined) {
            hasAnyValues = true;
            internalValueResult.status = this._status;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelPackageStatusItemProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._failureReason = undefined;
            this._name = undefined;
            this._status = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._failureReason = value.failureReason;
            this._name = value.name;
            this._status = value.status;
        }
    }

    // failure_reason - computed: true, optional: true, required: false
    private _failureReason?: string; 
    public get failureReason() {
        return this.getStringAttribute('failure_reason');
    }
    public set failureReason(value: string) {
        this._failureReason = value;
    }
    public resetFailureReason() {
        this._failureReason = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get failureReasonInput() {
        return this._failureReason;
    }

    // name - computed: true, optional: true, required: false
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    public resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // status - computed: true, optional: true, required: false
    private _status?: string; 
    public get status() {
        return this.getStringAttribute('status');
    }
    public set status(value: string) {
        this._status = value;
    }
    public resetStatus() {
        this._status = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusInput() {
        return this._status;
    }
}

export class ModelPackageStatusItemPropertyList extends cdktn.ComplexList {
    public internalValue? : ModelPackageStatusItemProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): ModelPackageStatusItemPropertyOutputReference {
        return new ModelPackageStatusItemPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ModelPackageStatusDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#validation_statuses CcModelPackage#validation_statuses}
    */
    readonly validationStatuses?: ModelPackageStatusItemProperty[] | cdktn.IResolvable;
}
export class ModelPackageStatusDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ModelPackageStatusDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._validationStatuses?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationStatuses = this._validationStatuses?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ModelPackageStatusDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._validationStatuses.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._validationStatuses.internalValue = value.validationStatuses;
        }
    }

    // validation_statuses - computed: true, optional: true, required: false
    private _validationStatuses = new ModelPackageStatusItemPropertyList(this, "validation_statuses", false);
    public get validationStatuses() {
        return this._validationStatuses;
    }
    public putValidationStatuses(value: ModelPackageStatusItemProperty[] | cdktn.IResolvable) {
        this._validationStatuses.internalValue = value;
    }
    public resetValidationStatuses() {
        this._validationStatuses.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationStatusesInput() {
        return this._validationStatuses.internalValue;
    }
}
export interface SecurityConfigProperty {
    /**
    * The AWS KMS Key ID (KMSKeyId) used for encryption of model package information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#kms_key_id CcModelPackage#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export class SecurityConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SecurityConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SecurityConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._kmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._kmsKeyId = value.kmsKeyId;
        }
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
}
export interface SourceAlgorithmProperty {
    /**
    * The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#algorithm_name CcModelPackage#algorithm_name}
    */
    readonly algorithmName?: string;
    /**
    * The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#model_data_url CcModelPackage#model_data_url}
    */
    readonly modelDataUrl?: string;
}
export class SourceAlgorithmPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): SourceAlgorithmProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._algorithmName !== undefined) {
            hasAnyValues = true;
            internalValueResult.algorithmName = this._algorithmName;
        }
        if (this._modelDataUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.modelDataUrl = this._modelDataUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceAlgorithmProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._algorithmName = undefined;
            this._modelDataUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._algorithmName = value.algorithmName;
            this._modelDataUrl = value.modelDataUrl;
        }
    }

    // algorithm_name - computed: true, optional: true, required: false
    private _algorithmName?: string; 
    public get algorithmName() {
        return this.getStringAttribute('algorithm_name');
    }
    public set algorithmName(value: string) {
        this._algorithmName = value;
    }
    public resetAlgorithmName() {
        this._algorithmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get algorithmNameInput() {
        return this._algorithmName;
    }

    // model_data_url - computed: true, optional: true, required: false
    private _modelDataUrl?: string; 
    public get modelDataUrl() {
        return this.getStringAttribute('model_data_url');
    }
    public set modelDataUrl(value: string) {
        this._modelDataUrl = value;
    }
    public resetModelDataUrl() {
        this._modelDataUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelDataUrlInput() {
        return this._modelDataUrl;
    }
}

export class SourceAlgorithmPropertyList extends cdktn.ComplexList {
    public internalValue? : SourceAlgorithmProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): SourceAlgorithmPropertyOutputReference {
        return new SourceAlgorithmPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface SourceAlgorithmSpecificationProperty {
    /**
    * A list of algorithms that were used to create a model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#source_algorithms CcModelPackage#source_algorithms}
    */
    readonly sourceAlgorithms?: SourceAlgorithmProperty[] | cdktn.IResolvable;
}
export class SourceAlgorithmSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SourceAlgorithmSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceAlgorithms?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceAlgorithms = this._sourceAlgorithms?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SourceAlgorithmSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceAlgorithms.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceAlgorithms.internalValue = value.sourceAlgorithms;
        }
    }

    // source_algorithms - computed: true, optional: true, required: false
    private _sourceAlgorithms = new SourceAlgorithmPropertyList(this, "source_algorithms", false);
    public get sourceAlgorithms() {
        return this._sourceAlgorithms;
    }
    public putSourceAlgorithms(value: SourceAlgorithmProperty[] | cdktn.IResolvable) {
        this._sourceAlgorithms.internalValue = value;
    }
    public resetSourceAlgorithms() {
        this._sourceAlgorithms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceAlgorithmsInput() {
        return this._sourceAlgorithms.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#key CcModelPackage#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#value CcModelPackage#value}
    */
    readonly value?: string;
}
export class TagPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): TagProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._value !== undefined) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TagProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._key = undefined;
            this._value = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._key = value.key;
            this._value = value.value;
        }
    }

    // key - computed: true, optional: true, required: false
    private _key?: string; 
    public get key() {
        return this.getStringAttribute('key');
    }
    public set key(value: string) {
        this._key = value;
    }
    public resetKey() {
        this._key = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
        return this._key;
    }

    // value - computed: true, optional: true, required: false
    private _value?: string; 
    public get value() {
        return this.getStringAttribute('value');
    }
    public set value(value: string) {
        this._value = value;
    }
    public resetValue() {
        this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
        return this._value;
    }
}

export class TagPropertyList extends cdktn.ComplexList {
    public internalValue? : TagProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): TagPropertyOutputReference {
        return new TagPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface S3DataSourceProperty {
    /**
    * The S3 Data Source Type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_data_type CcModelPackage#s3_data_type}
    */
    readonly s3DataType?: string;
    /**
    * Depending on the value specified for the S3DataType, identifies either a key name prefix or a manifest.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_uri CcModelPackage#s3_uri}
    */
    readonly s3Uri?: string;
}
export class S3DataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3DataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3DataType !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataType = this._s3DataType;
        }
        if (this._s3Uri !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Uri = this._s3Uri;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3DataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3DataType = undefined;
            this._s3Uri = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3DataType = value.s3DataType;
            this._s3Uri = value.s3Uri;
        }
    }

    // s3_data_type - computed: true, optional: true, required: false
    private _s3DataType?: string; 
    public get s3DataType() {
        return this.getStringAttribute('s3_data_type');
    }
    public set s3DataType(value: string) {
        this._s3DataType = value;
    }
    public resetS3DataType() {
        this._s3DataType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataTypeInput() {
        return this._s3DataType;
    }

    // s3_uri - computed: true, optional: true, required: false
    private _s3Uri?: string; 
    public get s3Uri() {
        return this.getStringAttribute('s3_uri');
    }
    public set s3Uri(value: string) {
        this._s3Uri = value;
    }
    public resetS3Uri() {
        this._s3Uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3UriInput() {
        return this._s3Uri;
    }
}
export interface DataSourceProperty {
    /**
    * Describes the S3 data source.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_data_source CcModelPackage#s3_data_source}
    */
    readonly s3DataSource?: S3DataSourceProperty;
}
export class DataSourcePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DataSourceProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3DataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3DataSource = this._s3DataSource?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DataSourceProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3DataSource.internalValue = value.s3DataSource;
        }
    }

    // s3_data_source - computed: true, optional: true, required: false
    private _s3DataSource = new S3DataSourcePropertyOutputReference(this, "s3_data_source");
    public get s3DataSource() {
        return this._s3DataSource;
    }
    public putS3DataSource(value: S3DataSourceProperty) {
        this._s3DataSource.internalValue = value;
    }
    public resetS3DataSource() {
        this._s3DataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3DataSourceInput() {
        return this._s3DataSource.internalValue;
    }
}
export interface TransformInputProperty {
    /**
    * If your transform data is compressed, specify the compression type. Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is None.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#compression_type CcModelPackage#compression_type}
    */
    readonly compressionType?: string;
    /**
    * The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#content_type CcModelPackage#content_type}
    */
    readonly contentType?: string;
    /**
    * Describes the input source of a transform job and the way the transform job consumes it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#data_source CcModelPackage#data_source}
    */
    readonly dataSource?: DataSourceProperty;
    /**
    * The method to use to split the transform job's data files into smaller batches. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#split_type CcModelPackage#split_type}
    */
    readonly splitType?: string;
}
export class TransformInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._compressionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.compressionType = this._compressionType;
        }
        if (this._contentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.contentType = this._contentType;
        }
        if (this._dataSource?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.dataSource = this._dataSource?.internalValue;
        }
        if (this._splitType !== undefined) {
            hasAnyValues = true;
            internalValueResult.splitType = this._splitType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._compressionType = undefined;
            this._contentType = undefined;
            this._dataSource.internalValue = undefined;
            this._splitType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._compressionType = value.compressionType;
            this._contentType = value.contentType;
            this._dataSource.internalValue = value.dataSource;
            this._splitType = value.splitType;
        }
    }

    // compression_type - computed: true, optional: true, required: false
    private _compressionType?: string; 
    public get compressionType() {
        return this.getStringAttribute('compression_type');
    }
    public set compressionType(value: string) {
        this._compressionType = value;
    }
    public resetCompressionType() {
        this._compressionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get compressionTypeInput() {
        return this._compressionType;
    }

    // content_type - computed: true, optional: true, required: false
    private _contentType?: string; 
    public get contentType() {
        return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
        this._contentType = value;
    }
    public resetContentType() {
        this._contentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
        return this._contentType;
    }

    // data_source - computed: true, optional: true, required: false
    private _dataSource = new DataSourcePropertyOutputReference(this, "data_source");
    public get dataSource() {
        return this._dataSource;
    }
    public putDataSource(value: DataSourceProperty) {
        this._dataSource.internalValue = value;
    }
    public resetDataSource() {
        this._dataSource.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataSourceInput() {
        return this._dataSource.internalValue;
    }

    // split_type - computed: true, optional: true, required: false
    private _splitType?: string; 
    public get splitType() {
        return this.getStringAttribute('split_type');
    }
    public set splitType(value: string) {
        this._splitType = value;
    }
    public resetSplitType() {
        this._splitType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get splitTypeInput() {
        return this._splitType;
    }
}
export interface TransformOutputProperty {
    /**
    * The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#accept CcModelPackage#accept}
    */
    readonly accept?: string;
    /**
    * Defines how to assemble the results of the transform job as a single S3 object.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#assemble_with CcModelPackage#assemble_with}
    */
    readonly assembleWith?: string;
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#kms_key_id CcModelPackage#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#s3_output_path CcModelPackage#s3_output_path}
    */
    readonly s3OutputPath?: string;
}
export class TransformOutputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformOutputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accept !== undefined) {
            hasAnyValues = true;
            internalValueResult.accept = this._accept;
        }
        if (this._assembleWith !== undefined) {
            hasAnyValues = true;
            internalValueResult.assembleWith = this._assembleWith;
        }
        if (this._kmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKeyId = this._kmsKeyId;
        }
        if (this._s3OutputPath !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3OutputPath = this._s3OutputPath;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformOutputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accept = undefined;
            this._assembleWith = undefined;
            this._kmsKeyId = undefined;
            this._s3OutputPath = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accept = value.accept;
            this._assembleWith = value.assembleWith;
            this._kmsKeyId = value.kmsKeyId;
            this._s3OutputPath = value.s3OutputPath;
        }
    }

    // accept - computed: true, optional: true, required: false
    private _accept?: string; 
    public get accept() {
        return this.getStringAttribute('accept');
    }
    public set accept(value: string) {
        this._accept = value;
    }
    public resetAccept() {
        this._accept = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get acceptInput() {
        return this._accept;
    }

    // assemble_with - computed: true, optional: true, required: false
    private _assembleWith?: string; 
    public get assembleWith() {
        return this.getStringAttribute('assemble_with');
    }
    public set assembleWith(value: string) {
        this._assembleWith = value;
    }
    public resetAssembleWith() {
        this._assembleWith = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assembleWithInput() {
        return this._assembleWith;
    }

    // kms_key_id - computed: true, optional: true, required: false
    private _kmsKeyId?: string; 
    public get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string) {
        this._kmsKeyId = value;
    }
    public resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyIdInput() {
        return this._kmsKeyId;
    }

    // s3_output_path - computed: true, optional: true, required: false
    private _s3OutputPath?: string; 
    public get s3OutputPath() {
        return this.getStringAttribute('s3_output_path');
    }
    public set s3OutputPath(value: string) {
        this._s3OutputPath = value;
    }
    public resetS3OutputPath() {
        this._s3OutputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3OutputPathInput() {
        return this._s3OutputPath;
    }
}
export interface TransformResourcesProperty {
    /**
    * The number of ML compute instances to use in the transform job. For distributed transform jobs, specify a value greater than 1. The default value is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#instance_count CcModelPackage#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * The ML compute instance type for the transform job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#instance_type CcModelPackage#instance_type}
    */
    readonly instanceType?: string;
    /**
    * The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume attached to the ML compute instance(s) that run the batch transform job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#volume_kms_key_id CcModelPackage#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
}
export class TransformResourcesPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformResourcesProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._instanceCount !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceCount = this._instanceCount;
        }
        if (this._instanceType !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceType = this._instanceType;
        }
        if (this._volumeKmsKeyId !== undefined) {
            hasAnyValues = true;
            internalValueResult.volumeKmsKeyId = this._volumeKmsKeyId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformResourcesProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._instanceCount = undefined;
            this._instanceType = undefined;
            this._volumeKmsKeyId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._instanceCount = value.instanceCount;
            this._instanceType = value.instanceType;
            this._volumeKmsKeyId = value.volumeKmsKeyId;
        }
    }

    // instance_count - computed: true, optional: true, required: false
    private _instanceCount?: number; 
    public get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    public set instanceCount(value: number) {
        this._instanceCount = value;
    }
    public resetInstanceCount() {
        this._instanceCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceCountInput() {
        return this._instanceCount;
    }

    // instance_type - computed: true, optional: true, required: false
    private _instanceType?: string; 
    public get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    public set instanceType(value: string) {
        this._instanceType = value;
    }
    public resetInstanceType() {
        this._instanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypeInput() {
        return this._instanceType;
    }

    // volume_kms_key_id - computed: true, optional: true, required: false
    private _volumeKmsKeyId?: string; 
    public get volumeKmsKeyId() {
        return this.getStringAttribute('volume_kms_key_id');
    }
    public set volumeKmsKeyId(value: string) {
        this._volumeKmsKeyId = value;
    }
    public resetVolumeKmsKeyId() {
        this._volumeKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get volumeKmsKeyIdInput() {
        return this._volumeKmsKeyId;
    }
}
export interface TransformJobDefinitionProperty {
    /**
    * A string that determines the number of records included in a single mini-batch.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#batch_strategy CcModelPackage#batch_strategy}
    */
    readonly batchStrategy?: string;
    /**
    * Sets the environment variables in the Docker container
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#environment CcModelPackage#environment}
    */
    readonly environment?: { [key: string]: string };
    /**
    * The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#max_concurrent_transforms CcModelPackage#max_concurrent_transforms}
    */
    readonly maxConcurrentTransforms?: number;
    /**
    * The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#max_payload_in_mb CcModelPackage#max_payload_in_mb}
    */
    readonly maxPayloadInMb?: number;
    /**
    * Describes the input source of a transform job and the way the transform job consumes it.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#transform_input CcModelPackage#transform_input}
    */
    readonly transformInput?: TransformInputProperty;
    /**
    * Describes the results of a transform job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#transform_output CcModelPackage#transform_output}
    */
    readonly transformOutput?: TransformOutputProperty;
    /**
    * Describes the resources, including ML instance types and ML instance count, to use for transform job.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#transform_resources CcModelPackage#transform_resources}
    */
    readonly transformResources?: TransformResourcesProperty;
}
export class TransformJobDefinitionPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): TransformJobDefinitionProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._batchStrategy !== undefined) {
            hasAnyValues = true;
            internalValueResult.batchStrategy = this._batchStrategy;
        }
        if (this._environment !== undefined) {
            hasAnyValues = true;
            internalValueResult.environment = this._environment;
        }
        if (this._maxConcurrentTransforms !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentTransforms = this._maxConcurrentTransforms;
        }
        if (this._maxPayloadInMb !== undefined) {
            hasAnyValues = true;
            internalValueResult.maxPayloadInMb = this._maxPayloadInMb;
        }
        if (this._transformInput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformInput = this._transformInput?.internalValue;
        }
        if (this._transformOutput?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformOutput = this._transformOutput?.internalValue;
        }
        if (this._transformResources?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformResources = this._transformResources?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TransformJobDefinitionProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._batchStrategy = undefined;
            this._environment = undefined;
            this._maxConcurrentTransforms = undefined;
            this._maxPayloadInMb = undefined;
            this._transformInput.internalValue = undefined;
            this._transformOutput.internalValue = undefined;
            this._transformResources.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._batchStrategy = value.batchStrategy;
            this._environment = value.environment;
            this._maxConcurrentTransforms = value.maxConcurrentTransforms;
            this._maxPayloadInMb = value.maxPayloadInMb;
            this._transformInput.internalValue = value.transformInput;
            this._transformOutput.internalValue = value.transformOutput;
            this._transformResources.internalValue = value.transformResources;
        }
    }

    // batch_strategy - computed: true, optional: true, required: false
    private _batchStrategy?: string; 
    public get batchStrategy() {
        return this.getStringAttribute('batch_strategy');
    }
    public set batchStrategy(value: string) {
        this._batchStrategy = value;
    }
    public resetBatchStrategy() {
        this._batchStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchStrategyInput() {
        return this._batchStrategy;
    }

    // environment - computed: true, optional: true, required: false
    private _environment?: { [key: string]: string }; 
    public get environment() {
        return this.getStringMapAttribute('environment');
    }
    public set environment(value: { [key: string]: string }) {
        this._environment = value;
    }
    public resetEnvironment() {
        this._environment = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentInput() {
        return this._environment;
    }

    // max_concurrent_transforms - computed: true, optional: true, required: false
    private _maxConcurrentTransforms?: number; 
    public get maxConcurrentTransforms() {
        return this.getNumberAttribute('max_concurrent_transforms');
    }
    public set maxConcurrentTransforms(value: number) {
        this._maxConcurrentTransforms = value;
    }
    public resetMaxConcurrentTransforms() {
        this._maxConcurrentTransforms = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxConcurrentTransformsInput() {
        return this._maxConcurrentTransforms;
    }

    // max_payload_in_mb - computed: true, optional: true, required: false
    private _maxPayloadInMb?: number; 
    public get maxPayloadInMb() {
        return this.getNumberAttribute('max_payload_in_mb');
    }
    public set maxPayloadInMb(value: number) {
        this._maxPayloadInMb = value;
    }
    public resetMaxPayloadInMb() {
        this._maxPayloadInMb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maxPayloadInMbInput() {
        return this._maxPayloadInMb;
    }

    // transform_input - computed: true, optional: true, required: false
    private _transformInput = new TransformInputPropertyOutputReference(this, "transform_input");
    public get transformInput() {
        return this._transformInput;
    }
    public putTransformInput(value: TransformInputProperty) {
        this._transformInput.internalValue = value;
    }
    public resetTransformInput() {
        this._transformInput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformInputInput() {
        return this._transformInput.internalValue;
    }

    // transform_output - computed: true, optional: true, required: false
    private _transformOutput = new TransformOutputPropertyOutputReference(this, "transform_output");
    public get transformOutput() {
        return this._transformOutput;
    }
    public putTransformOutput(value: TransformOutputProperty) {
        this._transformOutput.internalValue = value;
    }
    public resetTransformOutput() {
        this._transformOutput.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformOutputInput() {
        return this._transformOutput.internalValue;
    }

    // transform_resources - computed: true, optional: true, required: false
    private _transformResources = new TransformResourcesPropertyOutputReference(this, "transform_resources");
    public get transformResources() {
        return this._transformResources;
    }
    public putTransformResources(value: TransformResourcesProperty) {
        this._transformResources.internalValue = value;
    }
    public resetTransformResources() {
        this._transformResources.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformResourcesInput() {
        return this._transformResources.internalValue;
    }
}
export interface ValidationProfileProperty {
    /**
    * The name of the profile for the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#profile_name CcModelPackage#profile_name}
    */
    readonly profileName?: string;
    /**
    * Defines the input needed to run a transform job using the inference specification specified in the algorithm.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#transform_job_definition CcModelPackage#transform_job_definition}
    */
    readonly transformJobDefinition?: TransformJobDefinitionProperty;
}
export class ValidationProfilePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
        super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
    }

    public get internalValue(): ValidationProfileProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._profileName !== undefined) {
            hasAnyValues = true;
            internalValueResult.profileName = this._profileName;
        }
        if (this._transformJobDefinition?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.transformJobDefinition = this._transformJobDefinition?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationProfileProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._profileName = undefined;
            this._transformJobDefinition.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._profileName = value.profileName;
            this._transformJobDefinition.internalValue = value.transformJobDefinition;
        }
    }

    // profile_name - computed: true, optional: true, required: false
    private _profileName?: string; 
    public get profileName() {
        return this.getStringAttribute('profile_name');
    }
    public set profileName(value: string) {
        this._profileName = value;
    }
    public resetProfileName() {
        this._profileName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get profileNameInput() {
        return this._profileName;
    }

    // transform_job_definition - computed: true, optional: true, required: false
    private _transformJobDefinition = new TransformJobDefinitionPropertyOutputReference(this, "transform_job_definition");
    public get transformJobDefinition() {
        return this._transformJobDefinition;
    }
    public putTransformJobDefinition(value: TransformJobDefinitionProperty) {
        this._transformJobDefinition.internalValue = value;
    }
    public resetTransformJobDefinition() {
        this._transformJobDefinition.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get transformJobDefinitionInput() {
        return this._transformJobDefinition.internalValue;
    }
}

export class ValidationProfilePropertyList extends cdktn.ComplexList {
    public internalValue? : ValidationProfileProperty[] | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
        super(terraformResource, terraformAttribute, wrapsSet);
    }

    /**
    * @param index the index of the item to return
    */
    public get(index: number): ValidationProfilePropertyOutputReference {
        return new ValidationProfilePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface ValidationSpecificationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#validation_profiles CcModelPackage#validation_profiles}
    */
    readonly validationProfiles?: ValidationProfileProperty[] | cdktn.IResolvable;
    /**
    * The IAM roles to be used for the validation of the model package.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sagemaker_model_package#validation_role CcModelPackage#validation_role}
    */
    readonly validationRole?: string;
}
export class ValidationSpecificationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ValidationSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._validationProfiles?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationProfiles = this._validationProfiles?.internalValue;
        }
        if (this._validationRole !== undefined) {
            hasAnyValues = true;
            internalValueResult.validationRole = this._validationRole;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ValidationSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._validationProfiles.internalValue = undefined;
            this._validationRole = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._validationProfiles.internalValue = value.validationProfiles;
            this._validationRole = value.validationRole;
        }
    }

    // validation_profiles - computed: true, optional: true, required: false
    private _validationProfiles = new ValidationProfilePropertyList(this, "validation_profiles", false);
    public get validationProfiles() {
        return this._validationProfiles;
    }
    public putValidationProfiles(value: ValidationProfileProperty[] | cdktn.IResolvable) {
        this._validationProfiles.internalValue = value;
    }
    public resetValidationProfiles() {
        this._validationProfiles.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationProfilesInput() {
        return this._validationProfiles.internalValue;
    }

    // validation_role - computed: true, optional: true, required: false
    private _validationRole?: string; 
    public get validationRole() {
        return this.getStringAttribute('validation_role');
    }
    public set validationRole(value: string) {
        this._validationRole = value;
    }
    public resetValidationRole() {
        this._validationRole = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validationRoleInput() {
        return this._validationRole;
    }
}
}
