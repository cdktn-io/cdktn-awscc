// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRepositoryProps extends cdktn.TerraformMetaArguments {
    /**
    * Information about code to be committed to a repository after it is created in an AWS CloudFormation stack. Information about code is only used in resource creation. Updates to a stack will not reflect changes made to code properties after initial resource creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#code CcRepository#code}
    */
    readonly code?: CcRepository.CodeProperty;
    /**
    * The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#kms_key_id CcRepository#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * A comment or description about the new repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#repository_description CcRepository#repository_description}
    */
    readonly repositoryDescription?: string;
    /**
    * The name of the new repository to be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#repository_name CcRepository#repository_name}
    */
    readonly repositoryName: string;
    /**
    * One or more tag key-value pairs to use when tagging this repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#tags CcRepository#tags}
    */
    readonly tags?: CcRepository.TagProperty[] | cdktn.IResolvable;
    /**
    * Information about a trigger for a repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#triggers CcRepository#triggers}
    */
    readonly triggers?: CcRepository.RepositoryTriggerProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository awscc_codecommit_repository}
*/
export class CcRepository extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codecommit_repository";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRepository resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRepository to import
    * @param importFromId The id of the existing CcRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRepository to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codecommit_repository", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository awscc_codecommit_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRepositoryProps
    */
    public constructor(scope: Construct, id: string, config: CcRepositoryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codecommit_repository',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.99.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._code.internalValue = config.code;
        this._kmsKeyId = config.kmsKeyId;
        this._repositoryDescription = config.repositoryDescription;
        this._repositoryName = config.repositoryName;
        this._tags.internalValue = config.tags;
        this._triggers.internalValue = config.triggers;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // clone_url_http - computed: true, optional: false, required: false
    public get cloneUrlHttp() {
        return this.getStringAttribute('clone_url_http');
    }

    // clone_url_ssh - computed: true, optional: false, required: false
    public get cloneUrlSsh() {
        return this.getStringAttribute('clone_url_ssh');
    }

    // code - computed: true, optional: true, required: false
    private _code = new CcRepository.CodePropertyOutputReference(this, "code");
    public get code() {
        return this._code;
    }
    public putCode(value: CcRepository.CodeProperty) {
        this._code.internalValue = value;
    }
    public resetCode() {
        this._code.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
        return this._code.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // repository_description - computed: true, optional: true, required: false
    private _repositoryDescription?: string; 
    public get repositoryDescription() {
        return this.getStringAttribute('repository_description');
    }
    public set repositoryDescription(value: string) {
        this._repositoryDescription = value;
    }
    public resetRepositoryDescription() {
        this._repositoryDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryDescriptionInput() {
        return this._repositoryDescription;
    }

    // repository_id - computed: true, optional: false, required: false
    public get repositoryId() {
        return this.getStringAttribute('repository_id');
    }

    // repository_name - computed: false, optional: false, required: true
    private _repositoryName?: string; 
    public get repositoryName() {
        return this.getStringAttribute('repository_name');
    }
    public set repositoryName(value: string) {
        this._repositoryName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryNameInput() {
        return this._repositoryName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRepository.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRepository.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // triggers - computed: true, optional: true, required: false
    private _triggers = new CcRepository.RepositoryTriggerPropertyList(this, "triggers", false);
    public get triggers() {
        return this._triggers;
    }
    public putTriggers(value: CcRepository.RepositoryTriggerProperty[] | cdktn.IResolvable) {
        this._triggers.internalValue = value;
    }
    public resetTriggers() {
        this._triggers.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggersInput() {
        return this._triggers.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            code: ccRepositoryCodePropertyToTerraform(this._code.internalValue),
            kms_key_id: cdktn.stringToTerraform(this._kmsKeyId),
            repository_description: cdktn.stringToTerraform(this._repositoryDescription),
            repository_name: cdktn.stringToTerraform(this._repositoryName),
            tags: cdktn.listMapper(ccRepositoryTagPropertyToTerraform, false)(this._tags.internalValue),
            triggers: cdktn.listMapper(ccRepositoryRepositoryTriggerPropertyToTerraform, false)(this._triggers.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            code: {
                value: ccRepositoryCodePropertyToHclTerraform(this._code.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcRepository.CodeProperty",
            },
            kms_key_id: {
                value: cdktn.stringToHclTerraform(this._kmsKeyId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository_description: {
                value: cdktn.stringToHclTerraform(this._repositoryDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository_name: {
                value: cdktn.stringToHclTerraform(this._repositoryName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRepositoryTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRepository.TagPropertyList",
            },
            triggers: {
                value: cdktn.listMapperHcl(ccRepositoryRepositoryTriggerPropertyToHclTerraform, false)(this._triggers.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRepository.RepositoryTriggerPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRepositoryS3PropertyToTerraform(struct?: CcRepository.S3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bucket: cdktn.stringToTerraform(struct!.bucket),
        key: cdktn.stringToTerraform(struct!.key),
        object_version: cdktn.stringToTerraform(struct!.objectVersion),
    }
}


export function ccRepositoryS3PropertyToHclTerraform(struct?: CcRepository.S3Property | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bucket: {
            value: cdktn.stringToHclTerraform(struct!.bucket),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        key: {
            value: cdktn.stringToHclTerraform(struct!.key),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        object_version: {
            value: cdktn.stringToHclTerraform(struct!.objectVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRepositoryCodePropertyToTerraform(struct?: CcRepository.CodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        branch_name: cdktn.stringToTerraform(struct!.branchName),
        s3: ccRepositoryS3PropertyToTerraform(struct!.s3),
    }
}


export function ccRepositoryCodePropertyToHclTerraform(struct?: CcRepository.CodeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        branch_name: {
            value: cdktn.stringToHclTerraform(struct!.branchName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        s3: {
            value: ccRepositoryS3PropertyToHclTerraform(struct!.s3),
            isBlock: true,
            type: "struct",
            storageClassType: "S3Property",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccRepositoryTagPropertyToTerraform(struct?: CcRepository.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRepositoryTagPropertyToHclTerraform(struct?: CcRepository.TagProperty | cdktn.IResolvable): any {
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


export function ccRepositoryRepositoryTriggerPropertyToTerraform(struct?: CcRepository.RepositoryTriggerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        branches: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.branches),
        custom_data: cdktn.stringToTerraform(struct!.customData),
        destination_arn: cdktn.stringToTerraform(struct!.destinationArn),
        events: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.events),
        name: cdktn.stringToTerraform(struct!.name),
    }
}


export function ccRepositoryRepositoryTriggerPropertyToHclTerraform(struct?: CcRepository.RepositoryTriggerProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        branches: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.branches),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        custom_data: {
            value: cdktn.stringToHclTerraform(struct!.customData),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        destination_arn: {
            value: cdktn.stringToHclTerraform(struct!.destinationArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        events: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.events),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        name: {
            value: cdktn.stringToHclTerraform(struct!.name),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcRepository {
export interface S3Property {
    /**
    * The name of the Amazon S3 bucket that contains the ZIP file with the content that will be committed to the new repository. This can be specified using the name of the bucket in the AWS account. Changes to this property are ignored after initial resource creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#bucket CcRepository#bucket}
    */
    readonly bucket?: string;
    /**
    * The key to use for accessing the Amazon S3 bucket. Changes to this property are ignored after initial resource creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#key CcRepository#key}
    */
    readonly key?: string;
    /**
    * The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket. Changes to this property are ignored after initial resource creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#object_version CcRepository#object_version}
    */
    readonly objectVersion?: string;
}
export class S3PropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): S3Property | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._bucket !== undefined) {
            hasAnyValues = true;
            internalValueResult.bucket = this._bucket;
        }
        if (this._key !== undefined) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._objectVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.objectVersion = this._objectVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: S3Property | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._bucket = undefined;
            this._key = undefined;
            this._objectVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._bucket = value.bucket;
            this._key = value.key;
            this._objectVersion = value.objectVersion;
        }
    }

    // bucket - computed: true, optional: true, required: false
    private _bucket?: string; 
    public get bucket() {
        return this.getStringAttribute('bucket');
    }
    public set bucket(value: string) {
        this._bucket = value;
    }
    public resetBucket() {
        this._bucket = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bucketInput() {
        return this._bucket;
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

    // object_version - computed: true, optional: true, required: false
    private _objectVersion?: string; 
    public get objectVersion() {
        return this.getStringAttribute('object_version');
    }
    public set objectVersion(value: string) {
        this._objectVersion = value;
    }
    public resetObjectVersion() {
        this._objectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get objectVersionInput() {
        return this._objectVersion;
    }
}
export interface CodeProperty {
    /**
    * Optional. Specifies a branch name to be used as the default branch when importing code into a repository on initial creation. If this property is not set, the name main will be used for the default branch for the repository. Changes to this property are ignored after initial resource creation. We recommend using this parameter to set the name to main to align with the default behavior of CodeCommit unless another name is needed.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#branch_name CcRepository#branch_name}
    */
    readonly branchName?: string;
    /**
    * Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository. Changes to this property are ignored after initial resource creation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#s3 CcRepository#s3}
    */
    readonly s3?: S3Property;
}
export class CodePropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CodeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._branchName !== undefined) {
            hasAnyValues = true;
            internalValueResult.branchName = this._branchName;
        }
        if (this._s3?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.s3 = this._s3?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CodeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._branchName = undefined;
            this._s3.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._branchName = value.branchName;
            this._s3.internalValue = value.s3;
        }
    }

    // branch_name - computed: true, optional: true, required: false
    private _branchName?: string; 
    public get branchName() {
        return this.getStringAttribute('branch_name');
    }
    public set branchName(value: string) {
        this._branchName = value;
    }
    public resetBranchName() {
        this._branchName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get branchNameInput() {
        return this._branchName;
    }

    // s3 - computed: true, optional: true, required: false
    private _s3 = new S3PropertyOutputReference(this, "s3");
    public get s3() {
        return this._s3;
    }
    public putS3(value: S3Property) {
        this._s3.internalValue = value;
    }
    public resetS3() {
        this._s3.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get s3Input() {
        return this._s3.internalValue;
    }
}
export interface TagProperty {
    /**
    * The tag's key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#key CcRepository#key}
    */
    readonly key?: string;
    /**
    * The tag's value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#value CcRepository#value}
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
export interface RepositoryTriggerProperty {
    /**
    * The branches to be included in the trigger configuration. If you specify an empty array, the trigger applies to all branches.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#branches CcRepository#branches}
    */
    readonly branches?: string[];
    /**
    * Any custom data associated with the trigger to be included in the information sent to the target of the trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#custom_data CcRepository#custom_data}
    */
    readonly customData?: string;
    /**
    * The ARN of the resource that is the target for a trigger (for example, the ARN of a topic in Amazon SNS).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#destination_arn CcRepository#destination_arn}
    */
    readonly destinationArn?: string;
    /**
    * The repository events that cause the trigger to run actions in another service, such as sending a notification through Amazon SNS.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#events CcRepository#events}
    */
    readonly events?: string[];
    /**
    * The name of the trigger.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codecommit_repository#name CcRepository#name}
    */
    readonly name?: string;
}
export class RepositoryTriggerPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): RepositoryTriggerProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._branches !== undefined) {
            hasAnyValues = true;
            internalValueResult.branches = this._branches;
        }
        if (this._customData !== undefined) {
            hasAnyValues = true;
            internalValueResult.customData = this._customData;
        }
        if (this._destinationArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.destinationArn = this._destinationArn;
        }
        if (this._events !== undefined) {
            hasAnyValues = true;
            internalValueResult.events = this._events;
        }
        if (this._name !== undefined) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RepositoryTriggerProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._branches = undefined;
            this._customData = undefined;
            this._destinationArn = undefined;
            this._events = undefined;
            this._name = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._branches = value.branches;
            this._customData = value.customData;
            this._destinationArn = value.destinationArn;
            this._events = value.events;
            this._name = value.name;
        }
    }

    // branches - computed: true, optional: true, required: false
    private _branches?: string[]; 
    public get branches() {
        return this.getListAttribute('branches');
    }
    public set branches(value: string[]) {
        this._branches = value;
    }
    public resetBranches() {
        this._branches = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get branchesInput() {
        return this._branches;
    }

    // custom_data - computed: true, optional: true, required: false
    private _customData?: string; 
    public get customData() {
        return this.getStringAttribute('custom_data');
    }
    public set customData(value: string) {
        this._customData = value;
    }
    public resetCustomData() {
        this._customData = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get customDataInput() {
        return this._customData;
    }

    // destination_arn - computed: true, optional: true, required: false
    private _destinationArn?: string; 
    public get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
        this._destinationArn = value;
    }
    public resetDestinationArn() {
        this._destinationArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
        return this._destinationArn;
    }

    // events - computed: true, optional: true, required: false
    private _events?: string[]; 
    public get events() {
        return this.getListAttribute('events');
    }
    public set events(value: string[]) {
        this._events = value;
    }
    public resetEvents() {
        this._events = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventsInput() {
        return this._events;
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
}

export class RepositoryTriggerPropertyList extends cdktn.ComplexList {
    public internalValue? : RepositoryTriggerProperty[] | cdktn.IResolvable

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
    public get(index: number): RepositoryTriggerPropertyOutputReference {
        return new RepositoryTriggerPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
