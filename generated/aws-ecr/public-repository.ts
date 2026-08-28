// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPublicRepositoryProps extends cdktn.TerraformMetaArguments {
    /**
    * The details about the repository that are publicly visible in the Amazon ECR Public Gallery. For more information, see [Amazon ECR Public repository catalog data](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-catalog-data.html) in the *Amazon ECR Public User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#repository_catalog_data CcPublicRepository#repository_catalog_data}
    */
    readonly repositoryCatalogData?: CcPublicRepository.RepositoryCatalogDataProperty;
    /**
    * The name to use for the public repository. The repository name may be specified on its own (such as ``nginx-web-app``) or it can be prepended with a namespace to group the repository into a category (such as ``project-a/nginx-web-app``). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
    *   If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#repository_name CcPublicRepository#repository_name}
    */
    readonly repositoryName?: string;
    /**
    * The JSON repository policy text to apply to the public repository. For more information, see [Amazon ECR Public repository policies](https://docs.aws.amazon.com/AmazonECR/latest/public/public-repository-policies.html) in the *Amazon ECR Public User Guide*.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#repository_policy_text CcPublicRepository#repository_policy_text}
    */
    readonly repositoryPolicyText?: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#tags CcPublicRepository#tags}
    */
    readonly tags?: CcPublicRepository.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository awscc_ecr_public_repository}
*/
export class CcPublicRepository extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ecr_public_repository";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPublicRepository resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPublicRepository to import
    * @param importFromId The id of the existing CcPublicRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPublicRepository to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ecr_public_repository", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository awscc_ecr_public_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPublicRepositoryProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcPublicRepositoryProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ecr_public_repository',
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
        this._repositoryCatalogData.internalValue = config.repositoryCatalogData;
        this._repositoryName = config.repositoryName;
        this._repositoryPolicyText = config.repositoryPolicyText;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // repository_catalog_data - computed: true, optional: true, required: false
    private _repositoryCatalogData = new CcPublicRepository.RepositoryCatalogDataPropertyOutputReference(this, "repository_catalog_data");
    public get repositoryCatalogData() {
        return this._repositoryCatalogData;
    }
    public putRepositoryCatalogData(value: CcPublicRepository.RepositoryCatalogDataProperty) {
        this._repositoryCatalogData.internalValue = value;
    }
    public resetRepositoryCatalogData() {
        this._repositoryCatalogData.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryCatalogDataInput() {
        return this._repositoryCatalogData.internalValue;
    }

    // repository_name - computed: true, optional: true, required: false
    private _repositoryName?: string; 
    public get repositoryName() {
        return this.getStringAttribute('repository_name');
    }
    public set repositoryName(value: string) {
        this._repositoryName = value;
    }
    public resetRepositoryName() {
        this._repositoryName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryNameInput() {
        return this._repositoryName;
    }

    // repository_policy_text - computed: true, optional: true, required: false
    private _repositoryPolicyText?: string; 
    public get repositoryPolicyText() {
        return this.getStringAttribute('repository_policy_text');
    }
    public set repositoryPolicyText(value: string) {
        this._repositoryPolicyText = value;
    }
    public resetRepositoryPolicyText() {
        this._repositoryPolicyText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get repositoryPolicyTextInput() {
        return this._repositoryPolicyText;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPublicRepository.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPublicRepository.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            repository_catalog_data: ccPublicRepositoryRepositoryCatalogDataPropertyToTerraform(this._repositoryCatalogData.internalValue),
            repository_name: cdktn.stringToTerraform(this._repositoryName),
            repository_policy_text: cdktn.stringToTerraform(this._repositoryPolicyText),
            tags: cdktn.listMapper(ccPublicRepositoryTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            repository_catalog_data: {
                value: ccPublicRepositoryRepositoryCatalogDataPropertyToHclTerraform(this._repositoryCatalogData.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPublicRepository.RepositoryCatalogDataProperty",
            },
            repository_name: {
                value: cdktn.stringToHclTerraform(this._repositoryName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            repository_policy_text: {
                value: cdktn.stringToHclTerraform(this._repositoryPolicyText),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPublicRepositoryTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcPublicRepository.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPublicRepositoryRepositoryCatalogDataPropertyToTerraform(struct?: CcPublicRepository.RepositoryCatalogDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        about_text: cdktn.stringToTerraform(struct!.aboutText),
        architectures: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.architectures),
        operating_systems: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.operatingSystems),
        repository_description: cdktn.stringToTerraform(struct!.repositoryDescription),
        usage_text: cdktn.stringToTerraform(struct!.usageText),
    }
}


export function ccPublicRepositoryRepositoryCatalogDataPropertyToHclTerraform(struct?: CcPublicRepository.RepositoryCatalogDataProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        about_text: {
            value: cdktn.stringToHclTerraform(struct!.aboutText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        architectures: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.architectures),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        operating_systems: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.operatingSystems),
            isBlock: false,
            type: "set",
            storageClassType: "stringList",
        },
        repository_description: {
            value: cdktn.stringToHclTerraform(struct!.repositoryDescription),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        usage_text: {
            value: cdktn.stringToHclTerraform(struct!.usageText),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPublicRepositoryTagPropertyToTerraform(struct?: CcPublicRepository.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPublicRepositoryTagPropertyToHclTerraform(struct?: CcPublicRepository.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPublicRepository {
export interface RepositoryCatalogDataProperty {
    /**
    * Provide a detailed description of the repository. Identify what is included in the repository, any licensing details, or other relevant information.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#about_text CcPublicRepository#about_text}
    */
    readonly aboutText?: string;
    /**
    * Select the system architectures that the images in your repository are compatible with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#architectures CcPublicRepository#architectures}
    */
    readonly architectures?: string[];
    /**
    * Select the operating systems that the images in your repository are compatible with.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#operating_systems CcPublicRepository#operating_systems}
    */
    readonly operatingSystems?: string[];
    /**
    * The description of the public repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#repository_description CcPublicRepository#repository_description}
    */
    readonly repositoryDescription?: string;
    /**
    * Provide detailed information about how to use the images in the repository. This provides context, support information, and additional usage details for users of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#usage_text CcPublicRepository#usage_text}
    */
    readonly usageText?: string;
}
export class RepositoryCatalogDataPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): RepositoryCatalogDataProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._aboutText !== undefined) {
            hasAnyValues = true;
            internalValueResult.aboutText = this._aboutText;
        }
        if (this._architectures !== undefined) {
            hasAnyValues = true;
            internalValueResult.architectures = this._architectures;
        }
        if (this._operatingSystems !== undefined) {
            hasAnyValues = true;
            internalValueResult.operatingSystems = this._operatingSystems;
        }
        if (this._repositoryDescription !== undefined) {
            hasAnyValues = true;
            internalValueResult.repositoryDescription = this._repositoryDescription;
        }
        if (this._usageText !== undefined) {
            hasAnyValues = true;
            internalValueResult.usageText = this._usageText;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: RepositoryCatalogDataProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._aboutText = undefined;
            this._architectures = undefined;
            this._operatingSystems = undefined;
            this._repositoryDescription = undefined;
            this._usageText = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._aboutText = value.aboutText;
            this._architectures = value.architectures;
            this._operatingSystems = value.operatingSystems;
            this._repositoryDescription = value.repositoryDescription;
            this._usageText = value.usageText;
        }
    }

    // about_text - computed: true, optional: true, required: false
    private _aboutText?: string; 
    public get aboutText() {
        return this.getStringAttribute('about_text');
    }
    public set aboutText(value: string) {
        this._aboutText = value;
    }
    public resetAboutText() {
        this._aboutText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get aboutTextInput() {
        return this._aboutText;
    }

    // architectures - computed: true, optional: true, required: false
    private _architectures?: string[]; 
    public get architectures() {
        return cdktn.Fn.tolist(this.getListAttribute('architectures'));
    }
    public set architectures(value: string[]) {
        this._architectures = value;
    }
    public resetArchitectures() {
        this._architectures = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get architecturesInput() {
        return this._architectures;
    }

    // operating_systems - computed: true, optional: true, required: false
    private _operatingSystems?: string[]; 
    public get operatingSystems() {
        return cdktn.Fn.tolist(this.getListAttribute('operating_systems'));
    }
    public set operatingSystems(value: string[]) {
        this._operatingSystems = value;
    }
    public resetOperatingSystems() {
        this._operatingSystems = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatingSystemsInput() {
        return this._operatingSystems;
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

    // usage_text - computed: true, optional: true, required: false
    private _usageText?: string; 
    public get usageText() {
        return this.getStringAttribute('usage_text');
    }
    public set usageText(value: string) {
        this._usageText = value;
    }
    public resetUsageText() {
        this._usageText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usageTextInput() {
        return this._usageText;
    }
}
export interface TagProperty {
    /**
    * One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#key CcPublicRepository#key}
    */
    readonly key?: string;
    /**
    * A ``value`` acts as a descriptor within a tag category (key).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ecr_public_repository#value CcPublicRepository#value}
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
