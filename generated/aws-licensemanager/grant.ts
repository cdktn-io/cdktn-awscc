// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGrantProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant#allowed_operations CcGrant#allowed_operations}
    */
    readonly allowedOperations?: string[];
    /**
    * Name for the created Grant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant#grant_name CcGrant#grant_name}
    */
    readonly grantName?: string;
    /**
    * Home region for the created grant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant#home_region CcGrant#home_region}
    */
    readonly homeRegion?: string;
    /**
    * License Arn for the grant.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant#license_arn CcGrant#license_arn}
    */
    readonly licenseArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant#principals CcGrant#principals}
    */
    readonly principals?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant#status CcGrant#status}
    */
    readonly status?: string;
    /**
    * A list of tags to attach.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant#tags CcGrant#tags}
    */
    readonly tags?: CcGrant.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant awscc_licensemanager_grant}
*/
export class CcGrant extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_licensemanager_grant";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGrant resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGrant to import
    * @param importFromId The id of the existing CcGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGrant to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanager_grant", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant awscc_licensemanager_grant} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGrantProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcGrantProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_licensemanager_grant',
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
        this._allowedOperations = config.allowedOperations;
        this._grantName = config.grantName;
        this._homeRegion = config.homeRegion;
        this._licenseArn = config.licenseArn;
        this._principals = config.principals;
        this._status = config.status;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // allowed_operations - computed: true, optional: true, required: false
    private _allowedOperations?: string[]; 
    public get allowedOperations() {
        return this.getListAttribute('allowed_operations');
    }
    public set allowedOperations(value: string[]) {
        this._allowedOperations = value;
    }
    public resetAllowedOperations() {
        this._allowedOperations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowedOperationsInput() {
        return this._allowedOperations;
    }

    // grant_arn - computed: true, optional: false, required: false
    public get grantArn() {
        return this.getStringAttribute('grant_arn');
    }

    // grant_name - computed: true, optional: true, required: false
    private _grantName?: string; 
    public get grantName() {
        return this.getStringAttribute('grant_name');
    }
    public set grantName(value: string) {
        this._grantName = value;
    }
    public resetGrantName() {
        this._grantName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get grantNameInput() {
        return this._grantName;
    }

    // home_region - computed: true, optional: true, required: false
    private _homeRegion?: string; 
    public get homeRegion() {
        return this.getStringAttribute('home_region');
    }
    public set homeRegion(value: string) {
        this._homeRegion = value;
    }
    public resetHomeRegion() {
        this._homeRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get homeRegionInput() {
        return this._homeRegion;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // license_arn - computed: true, optional: true, required: false
    private _licenseArn?: string; 
    public get licenseArn() {
        return this.getStringAttribute('license_arn');
    }
    public set licenseArn(value: string) {
        this._licenseArn = value;
    }
    public resetLicenseArn() {
        this._licenseArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get licenseArnInput() {
        return this._licenseArn;
    }

    // principals - computed: true, optional: true, required: false
    private _principals?: string[]; 
    public get principals() {
        return this.getListAttribute('principals');
    }
    public set principals(value: string[]) {
        this._principals = value;
    }
    public resetPrincipals() {
        this._principals = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get principalsInput() {
        return this._principals;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcGrant.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcGrant.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // version - computed: true, optional: false, required: false
    public get version() {
        return this.getStringAttribute('version');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            allowed_operations: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedOperations),
            grant_name: cdktn.stringToTerraform(this._grantName),
            home_region: cdktn.stringToTerraform(this._homeRegion),
            license_arn: cdktn.stringToTerraform(this._licenseArn),
            principals: cdktn.listMapper(cdktn.stringToTerraform, false)(this._principals),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.listMapper(ccGrantTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            allowed_operations: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedOperations),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            grant_name: {
                value: cdktn.stringToHclTerraform(this._grantName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            home_region: {
                value: cdktn.stringToHclTerraform(this._homeRegion),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            license_arn: {
                value: cdktn.stringToHclTerraform(this._licenseArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            principals: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._principals),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccGrantTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcGrant.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGrantTagPropertyToTerraform(struct?: CcGrant.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccGrantTagPropertyToHclTerraform(struct?: CcGrant.TagProperty | cdktn.IResolvable): any {
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


export namespace CcGrant {
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant#key CcGrant#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/licensemanager_grant#value CcGrant#value}
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
