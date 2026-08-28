// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRepositoryProps extends cdktn.TerraformMetaArguments {
    /**
    * A text description of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository#description CcRepository#description}
    */
    readonly description?: string;
    /**
    * The name of the domain that contains the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository#domain_name CcRepository#domain_name}
    */
    readonly domainName: string;
    /**
    * A list of external connections associated with the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository#external_connections CcRepository#external_connections}
    */
    readonly externalConnections?: string[];
    /**
    * The access control resource policy on the provided repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository#permissions_policy_document CcRepository#permissions_policy_document}
    */
    readonly permissionsPolicyDocument?: string;
    /**
    * The name of the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository#repository_name CcRepository#repository_name}
    */
    readonly repositoryName: string;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository#tags CcRepository#tags}
    */
    readonly tags?: CcRepository.TagProperty[] | cdktn.IResolvable;
    /**
    * A list of upstream repositories associated with the repository.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository#upstreams CcRepository#upstreams}
    */
    readonly upstreams?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository awscc_codeartifact_repository}
*/
export class CcRepository extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codeartifact_repository";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRepository resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRepository to import
    * @param importFromId The id of the existing CcRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRepository to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codeartifact_repository", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository awscc_codeartifact_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRepositoryProps
    */
    public constructor(scope: Construct, id: string, config: CcRepositoryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codeartifact_repository',
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
        this._domainName = config.domainName;
        this._externalConnections = config.externalConnections;
        this._permissionsPolicyDocument = config.permissionsPolicyDocument;
        this._repositoryName = config.repositoryName;
        this._tags.internalValue = config.tags;
        this._upstreams = config.upstreams;
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

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
        return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
        return this._domainName;
    }

    // domain_owner - computed: true, optional: false, required: false
    public get domainOwner() {
        return this.getStringAttribute('domain_owner');
    }

    // external_connections - computed: true, optional: true, required: false
    private _externalConnections?: string[]; 
    public get externalConnections() {
        return this.getListAttribute('external_connections');
    }
    public set externalConnections(value: string[]) {
        this._externalConnections = value;
    }
    public resetExternalConnections() {
        this._externalConnections = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get externalConnectionsInput() {
        return this._externalConnections;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
        return this.getStringAttribute('name');
    }

    // permissions_policy_document - computed: true, optional: true, required: false
    private _permissionsPolicyDocument?: string; 
    public get permissionsPolicyDocument() {
        return this.getStringAttribute('permissions_policy_document');
    }
    public set permissionsPolicyDocument(value: string) {
        this._permissionsPolicyDocument = value;
    }
    public resetPermissionsPolicyDocument() {
        this._permissionsPolicyDocument = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsPolicyDocumentInput() {
        return this._permissionsPolicyDocument;
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

    // upstreams - computed: true, optional: true, required: false
    private _upstreams?: string[]; 
    public get upstreams() {
        return this.getListAttribute('upstreams');
    }
    public set upstreams(value: string[]) {
        this._upstreams = value;
    }
    public resetUpstreams() {
        this._upstreams = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get upstreamsInput() {
        return this._upstreams;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            domain_name: cdktn.stringToTerraform(this._domainName),
            external_connections: cdktn.listMapper(cdktn.stringToTerraform, false)(this._externalConnections),
            permissions_policy_document: cdktn.stringToTerraform(this._permissionsPolicyDocument),
            repository_name: cdktn.stringToTerraform(this._repositoryName),
            tags: cdktn.listMapper(ccRepositoryTagPropertyToTerraform, false)(this._tags.internalValue),
            upstreams: cdktn.listMapper(cdktn.stringToTerraform, false)(this._upstreams),
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
            domain_name: {
                value: cdktn.stringToHclTerraform(this._domainName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            external_connections: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._externalConnections),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            permissions_policy_document: {
                value: cdktn.stringToHclTerraform(this._permissionsPolicyDocument),
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
            upstreams: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._upstreams),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
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


export namespace CcRepository {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository#key CcRepository#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codeartifact_repository#value CcRepository#value}
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
