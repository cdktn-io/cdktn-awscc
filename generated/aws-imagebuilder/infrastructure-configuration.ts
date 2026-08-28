// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcInfrastructureConfigurationProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#description CcInfrastructureConfiguration#description}
    */
    readonly description?: string;
    /**
    * The instance metadata option settings for the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#instance_metadata_options CcInfrastructureConfiguration#instance_metadata_options}
    */
    readonly instanceMetadataOptions?: CcInfrastructureConfiguration.InstanceMetadataOptionsProperty;
    /**
    * The instance profile of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#instance_profile_name CcInfrastructureConfiguration#instance_profile_name}
    */
    readonly instanceProfileName: string;
    /**
    * The instance types of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#instance_types CcInfrastructureConfiguration#instance_types}
    */
    readonly instanceTypes?: string[];
    /**
    * The EC2 key pair of the infrastructure configuration..
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#key_pair CcInfrastructureConfiguration#key_pair}
    */
    readonly keyPair?: string;
    /**
    * The logging configuration of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#logging CcInfrastructureConfiguration#logging}
    */
    readonly logging?: CcInfrastructureConfiguration.LoggingProperty;
    /**
    * The name of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#name CcInfrastructureConfiguration#name}
    */
    readonly name: string;
    /**
    * The placement option settings for the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#placement CcInfrastructureConfiguration#placement}
    */
    readonly placement?: CcInfrastructureConfiguration.PlacementProperty;
    /**
    * The tags attached to the resource created by Image Builder.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#resource_tags CcInfrastructureConfiguration#resource_tags}
    */
    readonly resourceTags?: { [key: string]: string };
    /**
    * The security group IDs of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#security_group_ids CcInfrastructureConfiguration#security_group_ids}
    */
    readonly securityGroupIds?: string[];
    /**
    * The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#sns_topic_arn CcInfrastructureConfiguration#sns_topic_arn}
    */
    readonly snsTopicArn?: string;
    /**
    * The subnet ID of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#subnet_id CcInfrastructureConfiguration#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * The tags associated with the component.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#tags CcInfrastructureConfiguration#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * The terminate instance on failure configuration of the infrastructure configuration.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#terminate_instance_on_failure CcInfrastructureConfiguration#terminate_instance_on_failure}
    */
    readonly terminateInstanceOnFailure?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration awscc_imagebuilder_infrastructure_configuration}
*/
export class CcInfrastructureConfiguration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_imagebuilder_infrastructure_configuration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcInfrastructureConfiguration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcInfrastructureConfiguration to import
    * @param importFromId The id of the existing CcInfrastructureConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcInfrastructureConfiguration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_imagebuilder_infrastructure_configuration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration awscc_imagebuilder_infrastructure_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcInfrastructureConfigurationProps
    */
    public constructor(scope: Construct, id: string, config: CcInfrastructureConfigurationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_imagebuilder_infrastructure_configuration',
            terraformGeneratorMetadata: {
                providerName: 'awscc'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._description = config.description;
        this._instanceMetadataOptions.internalValue = config.instanceMetadataOptions;
        this._instanceProfileName = config.instanceProfileName;
        this._instanceTypes = config.instanceTypes;
        this._keyPair = config.keyPair;
        this._logging.internalValue = config.logging;
        this._name = config.name;
        this._placement.internalValue = config.placement;
        this._resourceTags = config.resourceTags;
        this._securityGroupIds = config.securityGroupIds;
        this._snsTopicArn = config.snsTopicArn;
        this._subnetId = config.subnetId;
        this._tags = config.tags;
        this._terminateInstanceOnFailure = config.terminateInstanceOnFailure;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_metadata_options - computed: true, optional: true, required: false
    private _instanceMetadataOptions = new CcInfrastructureConfiguration.InstanceMetadataOptionsPropertyOutputReference(this, "instance_metadata_options");
    public get instanceMetadataOptions() {
        return this._instanceMetadataOptions;
    }
    public putInstanceMetadataOptions(value: CcInfrastructureConfiguration.InstanceMetadataOptionsProperty) {
        this._instanceMetadataOptions.internalValue = value;
    }
    public resetInstanceMetadataOptions() {
        this._instanceMetadataOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceMetadataOptionsInput() {
        return this._instanceMetadataOptions.internalValue;
    }

    // instance_profile_name - computed: false, optional: false, required: true
    private _instanceProfileName?: string; 
    public get instanceProfileName() {
        return this.getStringAttribute('instance_profile_name');
    }
    public set instanceProfileName(value: string) {
        this._instanceProfileName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceProfileNameInput() {
        return this._instanceProfileName;
    }

    // instance_types - computed: true, optional: true, required: false
    private _instanceTypes?: string[]; 
    public get instanceTypes() {
        return this.getListAttribute('instance_types');
    }
    public set instanceTypes(value: string[]) {
        this._instanceTypes = value;
    }
    public resetInstanceTypes() {
        this._instanceTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceTypesInput() {
        return this._instanceTypes;
    }

    // key_pair - computed: true, optional: true, required: false
    private _keyPair?: string; 
    public get keyPair() {
        return this.getStringAttribute('key_pair');
    }
    public set keyPair(value: string) {
        this._keyPair = value;
    }
    public resetKeyPair() {
        this._keyPair = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get keyPairInput() {
        return this._keyPair;
    }

    // logging - computed: true, optional: true, required: false
    private _logging = new CcInfrastructureConfiguration.LoggingPropertyOutputReference(this, "logging");
    public get logging() {
        return this._logging;
    }
    public putLogging(value: CcInfrastructureConfiguration.LoggingProperty) {
        this._logging.internalValue = value;
    }
    public resetLogging() {
        this._logging.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingInput() {
        return this._logging.internalValue;
    }

    // name - computed: false, optional: false, required: true
    private _name?: string; 
    public get name() {
        return this.getStringAttribute('name');
    }
    public set name(value: string) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
        return this._name;
    }

    // placement - computed: true, optional: true, required: false
    private _placement = new CcInfrastructureConfiguration.PlacementPropertyOutputReference(this, "placement");
    public get placement() {
        return this._placement;
    }
    public putPlacement(value: CcInfrastructureConfiguration.PlacementProperty) {
        this._placement.internalValue = value;
    }
    public resetPlacement() {
        this._placement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementInput() {
        return this._placement.internalValue;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags?: { [key: string]: string }; 
    public get resourceTags() {
        return this.getStringMapAttribute('resource_tags');
    }
    public set resourceTags(value: { [key: string]: string }) {
        this._resourceTags = value;
    }
    public resetResourceTags() {
        this._resourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags;
    }

    // security_group_ids - computed: true, optional: true, required: false
    private _securityGroupIds?: string[]; 
    public get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    public set securityGroupIds(value: string[]) {
        this._securityGroupIds = value;
    }
    public resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupIdsInput() {
        return this._securityGroupIds;
    }

    // sns_topic_arn - computed: true, optional: true, required: false
    private _snsTopicArn?: string; 
    public get snsTopicArn() {
        return this.getStringAttribute('sns_topic_arn');
    }
    public set snsTopicArn(value: string) {
        this._snsTopicArn = value;
    }
    public resetSnsTopicArn() {
        this._snsTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsTopicArnInput() {
        return this._snsTopicArn;
    }

    // subnet_id - computed: true, optional: true, required: false
    private _subnetId?: string; 
    public get subnetId() {
        return this.getStringAttribute('subnet_id');
    }
    public set subnetId(value: string) {
        this._subnetId = value;
    }
    public resetSubnetId() {
        this._subnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetIdInput() {
        return this._subnetId;
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string }; 
    public get tags() {
        return this.getStringMapAttribute('tags');
    }
    public set tags(value: { [key: string]: string }) {
        this._tags = value;
    }
    public resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags;
    }

    // terminate_instance_on_failure - computed: true, optional: true, required: false
    private _terminateInstanceOnFailure?: boolean | cdktn.IResolvable; 
    public get terminateInstanceOnFailure() {
        return this.getBooleanAttribute('terminate_instance_on_failure');
    }
    public set terminateInstanceOnFailure(value: boolean | cdktn.IResolvable) {
        this._terminateInstanceOnFailure = value;
    }
    public resetTerminateInstanceOnFailure() {
        this._terminateInstanceOnFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get terminateInstanceOnFailureInput() {
        return this._terminateInstanceOnFailure;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            instance_metadata_options: ccInfrastructureConfigurationInstanceMetadataOptionsPropertyToTerraform(this._instanceMetadataOptions.internalValue),
            instance_profile_name: cdktn.stringToTerraform(this._instanceProfileName),
            instance_types: cdktn.listMapper(cdktn.stringToTerraform, false)(this._instanceTypes),
            key_pair: cdktn.stringToTerraform(this._keyPair),
            logging: ccInfrastructureConfigurationLoggingPropertyToTerraform(this._logging.internalValue),
            name: cdktn.stringToTerraform(this._name),
            placement: ccInfrastructureConfigurationPlacementPropertyToTerraform(this._placement.internalValue),
            resource_tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._resourceTags),
            security_group_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._securityGroupIds),
            sns_topic_arn: cdktn.stringToTerraform(this._snsTopicArn),
            subnet_id: cdktn.stringToTerraform(this._subnetId),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            terminate_instance_on_failure: cdktn.booleanToTerraform(this._terminateInstanceOnFailure),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_metadata_options: {
                value: ccInfrastructureConfigurationInstanceMetadataOptionsPropertyToHclTerraform(this._instanceMetadataOptions.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInfrastructureConfiguration.InstanceMetadataOptionsProperty",
            },
            instance_profile_name: {
                value: cdktn.stringToHclTerraform(this._instanceProfileName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_types: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._instanceTypes),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            key_pair: {
                value: cdktn.stringToHclTerraform(this._keyPair),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            logging: {
                value: ccInfrastructureConfigurationLoggingPropertyToHclTerraform(this._logging.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInfrastructureConfiguration.LoggingProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            placement: {
                value: ccInfrastructureConfigurationPlacementPropertyToHclTerraform(this._placement.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcInfrastructureConfiguration.PlacementProperty",
            },
            resource_tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._resourceTags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            security_group_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._securityGroupIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            sns_topic_arn: {
                value: cdktn.stringToHclTerraform(this._snsTopicArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subnet_id: {
                value: cdktn.stringToHclTerraform(this._subnetId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            terminate_instance_on_failure: {
                value: cdktn.booleanToHclTerraform(this._terminateInstanceOnFailure),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccInfrastructureConfigurationInstanceMetadataOptionsPropertyToTerraform(struct?: CcInfrastructureConfiguration.InstanceMetadataOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        http_put_response_hop_limit: cdktn.numberToTerraform(struct!.httpPutResponseHopLimit),
        http_tokens: cdktn.stringToTerraform(struct!.httpTokens),
    }
}


export function ccInfrastructureConfigurationInstanceMetadataOptionsPropertyToHclTerraform(struct?: CcInfrastructureConfiguration.InstanceMetadataOptionsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        http_put_response_hop_limit: {
            value: cdktn.numberToHclTerraform(struct!.httpPutResponseHopLimit),
            isBlock: false,
            type: "simple",
            storageClassType: "number",
        },
        http_tokens: {
            value: cdktn.stringToHclTerraform(struct!.httpTokens),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInfrastructureConfigurationS3LogsPropertyToTerraform(struct?: CcInfrastructureConfiguration.S3LogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_bucket_name: cdktn.stringToTerraform(struct!.s3BucketName),
        s3_key_prefix: cdktn.stringToTerraform(struct!.s3KeyPrefix),
    }
}


export function ccInfrastructureConfigurationS3LogsPropertyToHclTerraform(struct?: CcInfrastructureConfiguration.S3LogsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_bucket_name: {
            value: cdktn.stringToHclTerraform(struct!.s3BucketName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3_key_prefix: {
            value: cdktn.stringToHclTerraform(struct!.s3KeyPrefix),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInfrastructureConfigurationLoggingPropertyToTerraform(struct?: CcInfrastructureConfiguration.LoggingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        s3_logs: ccInfrastructureConfigurationS3LogsPropertyToTerraform(struct!.s3Logs),
    }
}


export function ccInfrastructureConfigurationLoggingPropertyToHclTerraform(struct?: CcInfrastructureConfiguration.LoggingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        s3_logs: {
            value: ccInfrastructureConfigurationS3LogsPropertyToHclTerraform(struct!.s3Logs),
            isBlock: true,
            type: "struct",
            storageClassType: "S3LogsProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccInfrastructureConfigurationPlacementPropertyToTerraform(struct?: CcInfrastructureConfiguration.PlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        availability_zone: cdktn.stringToTerraform(struct!.availabilityZone),
        host_id: cdktn.stringToTerraform(struct!.hostId),
        host_resource_group_arn: cdktn.stringToTerraform(struct!.hostResourceGroupArn),
        tenancy: cdktn.stringToTerraform(struct!.tenancy),
    }
}


export function ccInfrastructureConfigurationPlacementPropertyToHclTerraform(struct?: CcInfrastructureConfiguration.PlacementProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        availability_zone: {
            value: cdktn.stringToHclTerraform(struct!.availabilityZone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_id: {
            value: cdktn.stringToHclTerraform(struct!.hostId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        host_resource_group_arn: {
            value: cdktn.stringToHclTerraform(struct!.hostResourceGroupArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        tenancy: {
            value: cdktn.stringToHclTerraform(struct!.tenancy),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcInfrastructureConfiguration {
export interface InstanceMetadataOptionsProperty {
    /**
    * Limit the number of hops that an instance metadata request can traverse to reach its destination.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#http_put_response_hop_limit CcInfrastructureConfiguration#http_put_response_hop_limit}
    */
    readonly httpPutResponseHopLimit?: number;
    /**
    * Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows: 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#http_tokens CcInfrastructureConfiguration#http_tokens}
    */
    readonly httpTokens?: string;
}
export class InstanceMetadataOptionsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): InstanceMetadataOptionsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._httpPutResponseHopLimit !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpPutResponseHopLimit = this._httpPutResponseHopLimit;
        }
        if (this._httpTokens !== undefined) {
            hasAnyValues = true;
            internalValueResult.httpTokens = this._httpTokens;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: InstanceMetadataOptionsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._httpPutResponseHopLimit = undefined;
            this._httpTokens = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._httpPutResponseHopLimit = value.httpPutResponseHopLimit;
            this._httpTokens = value.httpTokens;
        }
    }

    // http_put_response_hop_limit - computed: true, optional: true, required: false
    private _httpPutResponseHopLimit?: number; 
    public get httpPutResponseHopLimit() {
        return this.getNumberAttribute('http_put_response_hop_limit');
    }
    public set httpPutResponseHopLimit(value: number) {
        this._httpPutResponseHopLimit = value;
    }
    public resetHttpPutResponseHopLimit() {
        this._httpPutResponseHopLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpPutResponseHopLimitInput() {
        return this._httpPutResponseHopLimit;
    }

    // http_tokens - computed: true, optional: true, required: false
    private _httpTokens?: string; 
    public get httpTokens() {
        return this.getStringAttribute('http_tokens');
    }
    public set httpTokens(value: string) {
        this._httpTokens = value;
    }
    public resetHttpTokens() {
        this._httpTokens = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpTokensInput() {
        return this._httpTokens;
    }
}
export interface S3LogsProperty {
    /**
    * S3BucketName
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#s3_bucket_name CcInfrastructureConfiguration#s3_bucket_name}
    */
    readonly s3BucketName?: string;
    /**
    * S3KeyPrefix
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#s3_key_prefix CcInfrastructureConfiguration#s3_key_prefix}
    */
    readonly s3KeyPrefix?: string;
}
export class S3LogsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3LogsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3BucketName !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3BucketName = this._s3BucketName;
        }
        if (this._s3KeyPrefix !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3KeyPrefix = this._s3KeyPrefix;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3LogsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3BucketName = undefined;
            this._s3KeyPrefix = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3BucketName = value.s3BucketName;
            this._s3KeyPrefix = value.s3KeyPrefix;
        }
    }

    // s3_bucket_name - computed: true, optional: true, required: false
    private _s3BucketName?: string; 
    public get s3BucketName() {
        return this.getStringAttribute('s3_bucket_name');
    }
    public set s3BucketName(value: string) {
        this._s3BucketName = value;
    }
    public resetS3BucketName() {
        this._s3BucketName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3BucketNameInput() {
        return this._s3BucketName;
    }

    // s3_key_prefix - computed: true, optional: true, required: false
    private _s3KeyPrefix?: string; 
    public get s3KeyPrefix() {
        return this.getStringAttribute('s3_key_prefix');
    }
    public set s3KeyPrefix(value: string) {
        this._s3KeyPrefix = value;
    }
    public resetS3KeyPrefix() {
        this._s3KeyPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3KeyPrefixInput() {
        return this._s3KeyPrefix;
    }
}
export interface LoggingProperty {
    /**
    * The S3 path in which to store the logs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#s3_logs CcInfrastructureConfiguration#s3_logs}
    */
    readonly s3Logs?: S3LogsProperty;
}
export class LoggingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LoggingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._s3Logs?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3Logs = this._s3Logs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LoggingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._s3Logs.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._s3Logs.internalValue = value.s3Logs;
        }
    }

    // s3_logs - computed: true, optional: true, required: false
    private _s3Logs = new S3LogsPropertyOutputReference(this, "s3_logs");
    public get s3Logs() {
        return this._s3Logs;
    }
    public putS3Logs(value: S3LogsProperty) {
        this._s3Logs.internalValue = value;
    }
    public resetS3Logs() {
        this._s3Logs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3LogsInput() {
        return this._s3Logs.internalValue;
    }
}
export interface PlacementProperty {
    /**
    * AvailabilityZone
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#availability_zone CcInfrastructureConfiguration#availability_zone}
    */
    readonly availabilityZone?: string;
    /**
    * HostId
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#host_id CcInfrastructureConfiguration#host_id}
    */
    readonly hostId?: string;
    /**
    * HostResourceGroupArn
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#host_resource_group_arn CcInfrastructureConfiguration#host_resource_group_arn}
    */
    readonly hostResourceGroupArn?: string;
    /**
    * Tenancy
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/imagebuilder_infrastructure_configuration#tenancy CcInfrastructureConfiguration#tenancy}
    */
    readonly tenancy?: string;
}
export class PlacementPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): PlacementProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._availabilityZone !== undefined) {
            hasAnyValues = true;
            internalValueResult.availabilityZone = this._availabilityZone;
        }
        if (this._hostId !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostId = this._hostId;
        }
        if (this._hostResourceGroupArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.hostResourceGroupArn = this._hostResourceGroupArn;
        }
        if (this._tenancy !== undefined) {
            hasAnyValues = true;
            internalValueResult.tenancy = this._tenancy;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PlacementProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._availabilityZone = undefined;
            this._hostId = undefined;
            this._hostResourceGroupArn = undefined;
            this._tenancy = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._availabilityZone = value.availabilityZone;
            this._hostId = value.hostId;
            this._hostResourceGroupArn = value.hostResourceGroupArn;
            this._tenancy = value.tenancy;
        }
    }

    // availability_zone - computed: true, optional: true, required: false
    private _availabilityZone?: string; 
    public get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    public set availabilityZone(value: string) {
        this._availabilityZone = value;
    }
    public resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get availabilityZoneInput() {
        return this._availabilityZone;
    }

    // host_id - computed: true, optional: true, required: false
    private _hostId?: string; 
    public get hostId() {
        return this.getStringAttribute('host_id');
    }
    public set hostId(value: string) {
        this._hostId = value;
    }
    public resetHostId() {
        this._hostId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostIdInput() {
        return this._hostId;
    }

    // host_resource_group_arn - computed: true, optional: true, required: false
    private _hostResourceGroupArn?: string; 
    public get hostResourceGroupArn() {
        return this.getStringAttribute('host_resource_group_arn');
    }
    public set hostResourceGroupArn(value: string) {
        this._hostResourceGroupArn = value;
    }
    public resetHostResourceGroupArn() {
        this._hostResourceGroupArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get hostResourceGroupArnInput() {
        return this._hostResourceGroupArn;
    }

    // tenancy - computed: true, optional: true, required: false
    private _tenancy?: string; 
    public get tenancy() {
        return this.getStringAttribute('tenancy');
    }
    public set tenancy(value: string) {
        this._tenancy = value;
    }
    public resetTenancy() {
        this._tenancy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tenancyInput() {
        return this._tenancy;
    }
}
}
