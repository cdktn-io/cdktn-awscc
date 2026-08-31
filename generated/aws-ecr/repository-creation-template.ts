// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRepositoryCreationTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. The supported scenarios are PULL_THROUGH_CACHE, REPLICATION, and CREATE_ON_PUSH
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#applied_for CcRepositoryCreationTemplate#applied_for}
    */
    readonly appliedFor: string[];
    /**
    * The ARN of the role to be assumed by Amazon ECR. Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#custom_role_arn CcRepositoryCreationTemplate#custom_role_arn}
    */
    readonly customRoleArn?: string;
    /**
    * The description associated with the repository creation template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#description CcRepositoryCreationTemplate#description}
    */
    readonly description?: string;
    /**
    * The encryption configuration associated with the repository creation template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#encryption_configuration CcRepositoryCreationTemplate#encryption_configuration}
    */
    readonly encryptionConfiguration?: CcRepositoryCreationTemplate.EncryptionConfigurationProperty;
    /**
    * The tag mutability setting for the repository. If this parameter is omitted, the default setting of ``MUTABLE`` will be used which will allow image tags to be overwritten. If ``IMMUTABLE`` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#image_tag_mutability CcRepositoryCreationTemplate#image_tag_mutability}
    */
    readonly imageTagMutability?: string;
    /**
    * A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filters CcRepositoryCreationTemplate#image_tag_mutability_exclusion_filters}
    */
    readonly imageTagMutabilityExclusionFilters?: CcRepositoryCreationTemplate.ImageTagMutabilityExclusionFilterProperty[] | cdktn.IResolvable;
    /**
    * The lifecycle policy to use for repositories created using the template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#lifecycle_policy CcRepositoryCreationTemplate#lifecycle_policy}
    */
    readonly lifecyclePolicy?: string;
    /**
    * The repository namespace prefix associated with the repository creation template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#prefix CcRepositoryCreationTemplate#prefix}
    */
    readonly prefix: string;
    /**
    * The repository policy to apply to repositories created using the template. A repository policy is a permissions policy associated with a repository to control access permissions.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#repository_policy CcRepositoryCreationTemplate#repository_policy}
    */
    readonly repositoryPolicy?: string;
    /**
    * The metadata to apply to the repository to help you categorize and organize. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#resource_tags CcRepositoryCreationTemplate#resource_tags}
    */
    readonly resourceTags?: CcRepositoryCreationTemplate.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template awscc_ecr_repository_creation_template}
*/
export class CcRepositoryCreationTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecr_repository_creation_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRepositoryCreationTemplate to import
    * @param importFromId The id of the existing CcRepositoryCreationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRepositoryCreationTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_repository_creation_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template awscc_ecr_repository_creation_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRepositoryCreationTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcRepositoryCreationTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecr_repository_creation_template',
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
        this._appliedFor = config.appliedFor;
        this._customRoleArn = config.customRoleArn;
        this._description = config.description;
        this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
        this._imageTagMutability = config.imageTagMutability;
        this._imageTagMutabilityExclusionFilters.internalValue = config.imageTagMutabilityExclusionFilters;
        this._lifecyclePolicy = config.lifecyclePolicy;
        this._prefix = config.prefix;
        this._repositoryPolicy = config.repositoryPolicy;
        this._resourceTags.internalValue = config.resourceTags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // applied_for - computed: false, optional: false, required: true
    private _appliedFor?: string[]; 
    public get appliedFor() {
        return cdktn.Fn.tolist(this.getListAttribute('applied_for'));
    }
    public set appliedFor(value: string[]) {
        this._appliedFor = value;
    }
    // Temporarily expose input value. Use with caution.
    public get appliedForInput() {
        return this._appliedFor;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // custom_role_arn - computed: true, optional: true, required: false
    private _customRoleArn?: string; 
    public get customRoleArn() {
        return this.getStringAttribute('custom_role_arn');
    }
    public set customRoleArn(value: string) {
        this._customRoleArn = value;
    }
    public resetCustomRoleArn() {
        this._customRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customRoleArnInput() {
        return this._customRoleArn;
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

    // encryption_configuration - computed: true, optional: true, required: false
    private _encryptionConfiguration = new CcRepositoryCreationTemplate.EncryptionConfigurationPropertyOutputReference(this, "encryption_configuration");
    public get encryptionConfiguration() {
        return this._encryptionConfiguration;
    }
    public putEncryptionConfiguration(value: CcRepositoryCreationTemplate.EncryptionConfigurationProperty) {
        this._encryptionConfiguration.internalValue = value;
    }
    public resetEncryptionConfiguration() {
        this._encryptionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionConfigurationInput() {
        return this._encryptionConfiguration.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // image_tag_mutability - computed: true, optional: true, required: false
    private _imageTagMutability?: string; 
    public get imageTagMutability() {
        return this.getStringAttribute('image_tag_mutability');
    }
    public set imageTagMutability(value: string) {
        this._imageTagMutability = value;
    }
    public resetImageTagMutability() {
        this._imageTagMutability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTagMutabilityInput() {
        return this._imageTagMutability;
    }

    // image_tag_mutability_exclusion_filters - computed: true, optional: true, required: false
    private _imageTagMutabilityExclusionFilters = new CcRepositoryCreationTemplate.ImageTagMutabilityExclusionFilterPropertyList(this, "image_tag_mutability_exclusion_filters", false);
    public get imageTagMutabilityExclusionFilters() {
        return this._imageTagMutabilityExclusionFilters;
    }
    public putImageTagMutabilityExclusionFilters(value: CcRepositoryCreationTemplate.ImageTagMutabilityExclusionFilterProperty[] | cdktn.IResolvable) {
        this._imageTagMutabilityExclusionFilters.internalValue = value;
    }
    public resetImageTagMutabilityExclusionFilters() {
        this._imageTagMutabilityExclusionFilters.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTagMutabilityExclusionFiltersInput() {
        return this._imageTagMutabilityExclusionFilters.internalValue;
    }

    // lifecycle_policy - computed: true, optional: true, required: false
    private _lifecyclePolicy?: string; 
    public get lifecyclePolicy() {
        return this.getStringAttribute('lifecycle_policy');
    }
    public set lifecyclePolicy(value: string) {
        this._lifecyclePolicy = value;
    }
    public resetLifecyclePolicy() {
        this._lifecyclePolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get lifecyclePolicyInput() {
        return this._lifecyclePolicy;
    }

    // prefix - computed: false, optional: false, required: true
    private _prefix?: string; 
    public get prefix() {
        return this.getStringAttribute('prefix');
    }
    public set prefix(value: string) {
        this._prefix = value;
    }
    // Temporarily expose input value. Use with caution.
    public get prefixInput() {
        return this._prefix;
    }

    // repository_policy - computed: true, optional: true, required: false
    private _repositoryPolicy?: string; 
    public get repositoryPolicy() {
        return this.getStringAttribute('repository_policy');
    }
    public set repositoryPolicy(value: string) {
        this._repositoryPolicy = value;
    }
    public resetRepositoryPolicy() {
        this._repositoryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryPolicyInput() {
        return this._repositoryPolicy;
    }

    // resource_tags - computed: true, optional: true, required: false
    private _resourceTags = new CcRepositoryCreationTemplate.TagPropertyList(this, "resource_tags", true);
    public get resourceTags() {
        return this._resourceTags;
    }
    public putResourceTags(value: CcRepositoryCreationTemplate.TagProperty[] | cdktn.IResolvable) {
        this._resourceTags.internalValue = value;
    }
    public resetResourceTags() {
        this._resourceTags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceTagsInput() {
        return this._resourceTags.internalValue;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            applied_for: cdktn.listMapper(cdktn.stringToTerraform, false)(this._appliedFor),
            custom_role_arn: cdktn.stringToTerraform(this._customRoleArn),
            description: cdktn.stringToTerraform(this._description),
            encryption_configuration: ccRepositoryCreationTemplateEncryptionConfigurationPropertyToTerraform(this._encryptionConfiguration.internalValue),
            image_tag_mutability: cdktn.stringToTerraform(this._imageTagMutability),
            image_tag_mutability_exclusion_filters: cdktn.listMapper(ccRepositoryCreationTemplateImageTagMutabilityExclusionFilterPropertyToTerraform, false)(this._imageTagMutabilityExclusionFilters.internalValue),
            lifecycle_policy: cdktn.stringToTerraform(this._lifecyclePolicy),
            prefix: cdktn.stringToTerraform(this._prefix),
            repository_policy: cdktn.stringToTerraform(this._repositoryPolicy),
            resource_tags: cdktn.listMapper(ccRepositoryCreationTemplateTagPropertyToTerraform, false)(this._resourceTags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            applied_for: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._appliedFor),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            custom_role_arn: {
                value: cdktn.stringToHclTerraform(this._customRoleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            encryption_configuration: {
                value: ccRepositoryCreationTemplateEncryptionConfigurationPropertyToHclTerraform(this._encryptionConfiguration.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRepositoryCreationTemplate.EncryptionConfigurationProperty",
            },
            image_tag_mutability: {
                value: cdktn.stringToHclTerraform(this._imageTagMutability),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            image_tag_mutability_exclusion_filters: {
                value: cdktn.listMapperHcl(ccRepositoryCreationTemplateImageTagMutabilityExclusionFilterPropertyToHclTerraform, false)(this._imageTagMutabilityExclusionFilters.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRepositoryCreationTemplate.ImageTagMutabilityExclusionFilterPropertyList",
            },
            lifecycle_policy: {
                value: cdktn.stringToHclTerraform(this._lifecyclePolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            prefix: {
                value: cdktn.stringToHclTerraform(this._prefix),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository_policy: {
                value: cdktn.stringToHclTerraform(this._repositoryPolicy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource_tags: {
                value: cdktn.listMapperHcl(ccRepositoryCreationTemplateTagPropertyToHclTerraform, false)(this._resourceTags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcRepositoryCreationTemplate.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRepositoryCreationTemplateEncryptionConfigurationPropertyToTerraform(struct?: CcRepositoryCreationTemplate.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        encryption_type: cdktn.stringToTerraform(struct!.encryptionType),
        kms_key: cdktn.stringToTerraform(struct!.kmsKey),
    }
}


export function ccRepositoryCreationTemplateEncryptionConfigurationPropertyToHclTerraform(struct?: CcRepositoryCreationTemplate.EncryptionConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        encryption_type: {
            value: cdktn.stringToHclTerraform(struct!.encryptionType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        kms_key: {
            value: cdktn.stringToHclTerraform(struct!.kmsKey),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRepositoryCreationTemplateImageTagMutabilityExclusionFilterPropertyToTerraform(struct?: CcRepositoryCreationTemplate.ImageTagMutabilityExclusionFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        image_tag_mutability_exclusion_filter_type: cdktn.stringToTerraform(struct!.imageTagMutabilityExclusionFilterType),
        image_tag_mutability_exclusion_filter_value: cdktn.stringToTerraform(struct!.imageTagMutabilityExclusionFilterValue),
    }
}


export function ccRepositoryCreationTemplateImageTagMutabilityExclusionFilterPropertyToHclTerraform(struct?: CcRepositoryCreationTemplate.ImageTagMutabilityExclusionFilterProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        image_tag_mutability_exclusion_filter_type: {
            value: cdktn.stringToHclTerraform(struct!.imageTagMutabilityExclusionFilterType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        image_tag_mutability_exclusion_filter_value: {
            value: cdktn.stringToHclTerraform(struct!.imageTagMutabilityExclusionFilterValue),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRepositoryCreationTemplateTagPropertyToTerraform(struct?: CcRepositoryCreationTemplate.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRepositoryCreationTemplateTagPropertyToHclTerraform(struct?: CcRepositoryCreationTemplate.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRepositoryCreationTemplate {
export interface EncryptionConfigurationProperty {
    /**
    * The encryption type to use.
    *  If you use the ``KMS`` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
    *  If you use the ``KMS_DSSE`` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the ``KMS`` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created. 
    *  If you use the ``AES256`` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
    *  For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#encryption_type CcRepositoryCreationTemplate#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#kms_key CcRepositoryCreationTemplate#kms_key}
    */
    readonly kmsKey?: string;
}
export class EncryptionConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): EncryptionConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._encryptionType !== undefined) {
            hasAnyValues = true;
            internalValueResult.encryptionType = this._encryptionType;
        }
        if (this._kmsKey !== undefined) {
            hasAnyValues = true;
            internalValueResult.kmsKey = this._kmsKey;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EncryptionConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._encryptionType = undefined;
            this._kmsKey = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._encryptionType = value.encryptionType;
            this._kmsKey = value.kmsKey;
        }
    }

    // encryption_type - computed: true, optional: true, required: false
    private _encryptionType?: string; 
    public get encryptionType() {
        return this.getStringAttribute('encryption_type');
    }
    public set encryptionType(value: string) {
        this._encryptionType = value;
    }
    public resetEncryptionType() {
        this._encryptionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get encryptionTypeInput() {
        return this._encryptionType;
    }

    // kms_key - computed: true, optional: true, required: false
    private _kmsKey?: string; 
    public get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    public set kmsKey(value: string) {
        this._kmsKey = value;
    }
    public resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyInput() {
        return this._kmsKey;
    }
}
export interface ImageTagMutabilityExclusionFilterProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_type CcRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_type}
    */
    readonly imageTagMutabilityExclusionFilterType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_value CcRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_value}
    */
    readonly imageTagMutabilityExclusionFilterValue?: string;
}
export class ImageTagMutabilityExclusionFilterPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ImageTagMutabilityExclusionFilterProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._imageTagMutabilityExclusionFilterType !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageTagMutabilityExclusionFilterType = this._imageTagMutabilityExclusionFilterType;
        }
        if (this._imageTagMutabilityExclusionFilterValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.imageTagMutabilityExclusionFilterValue = this._imageTagMutabilityExclusionFilterValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ImageTagMutabilityExclusionFilterProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._imageTagMutabilityExclusionFilterType = undefined;
            this._imageTagMutabilityExclusionFilterValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._imageTagMutabilityExclusionFilterType = value.imageTagMutabilityExclusionFilterType;
            this._imageTagMutabilityExclusionFilterValue = value.imageTagMutabilityExclusionFilterValue;
        }
    }

    // image_tag_mutability_exclusion_filter_type - computed: true, optional: true, required: false
    private _imageTagMutabilityExclusionFilterType?: string; 
    public get imageTagMutabilityExclusionFilterType() {
        return this.getStringAttribute('image_tag_mutability_exclusion_filter_type');
    }
    public set imageTagMutabilityExclusionFilterType(value: string) {
        this._imageTagMutabilityExclusionFilterType = value;
    }
    public resetImageTagMutabilityExclusionFilterType() {
        this._imageTagMutabilityExclusionFilterType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTagMutabilityExclusionFilterTypeInput() {
        return this._imageTagMutabilityExclusionFilterType;
    }

    // image_tag_mutability_exclusion_filter_value - computed: true, optional: true, required: false
    private _imageTagMutabilityExclusionFilterValue?: string; 
    public get imageTagMutabilityExclusionFilterValue() {
        return this.getStringAttribute('image_tag_mutability_exclusion_filter_value');
    }
    public set imageTagMutabilityExclusionFilterValue(value: string) {
        this._imageTagMutabilityExclusionFilterValue = value;
    }
    public resetImageTagMutabilityExclusionFilterValue() {
        this._imageTagMutabilityExclusionFilterValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get imageTagMutabilityExclusionFilterValueInput() {
        return this._imageTagMutabilityExclusionFilterValue;
    }
}

export class ImageTagMutabilityExclusionFilterPropertyList extends cdktn.ComplexList {
    public internalValue? : ImageTagMutabilityExclusionFilterProperty[] | cdktn.IResolvable

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
    public get(index: number): ImageTagMutabilityExclusionFilterPropertyOutputReference {
        return new ImageTagMutabilityExclusionFilterPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#key CcRepositoryCreationTemplate#key}
    */
    readonly key?: string;
    /**
    * A ``value`` acts as a descriptor within a tag category (key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecr_repository_creation_template#value CcRepositoryCreationTemplate#value}
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
}
