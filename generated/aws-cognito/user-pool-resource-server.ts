// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_resource_server

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserPoolResourceServerProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_resource_server#identifier CcUserPoolResourceServer#identifier}
    */
    readonly identifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_resource_server#name CcUserPoolResourceServer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_resource_server#scopes CcUserPoolResourceServer#scopes}
    */
    readonly scopes?: CcUserPoolResourceServer.ResourceServerScopeTypeProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_resource_server#user_pool_id CcUserPoolResourceServer#user_pool_id}
    */
    readonly userPoolId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_resource_server awscc_cognito_user_pool_resource_server}
*/
export class CcUserPoolResourceServer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cognito_user_pool_resource_server";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserPoolResourceServer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserPoolResourceServer to import
    * @param importFromId The id of the existing CcUserPoolResourceServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_resource_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserPoolResourceServer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cognito_user_pool_resource_server", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_resource_server awscc_cognito_user_pool_resource_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserPoolResourceServerProps
    */
    public constructor(scope: Construct, id: string, config: CcUserPoolResourceServerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cognito_user_pool_resource_server',
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
        this._identifier = config.identifier;
        this._name = config.name;
        this._scopes.internalValue = config.scopes;
        this._userPoolId = config.userPoolId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identifier - computed: false, optional: false, required: true
    private _identifier?: string; 
    public get identifier() {
        return this.getStringAttribute('identifier');
    }
    public set identifier(value: string) {
        this._identifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identifierInput() {
        return this._identifier;
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

    // scopes - computed: true, optional: true, required: false
    private _scopes = new CcUserPoolResourceServer.ResourceServerScopeTypePropertyList(this, "scopes", false);
    public get scopes() {
        return this._scopes;
    }
    public putScopes(value: CcUserPoolResourceServer.ResourceServerScopeTypeProperty[] | cdktn.IResolvable) {
        this._scopes.internalValue = value;
    }
    public resetScopes() {
        this._scopes.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopesInput() {
        return this._scopes.internalValue;
    }

    // user_pool_id - computed: false, optional: false, required: true
    private _userPoolId?: string; 
    public get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
    public set userPoolId(value: string) {
        this._userPoolId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userPoolIdInput() {
        return this._userPoolId;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            identifier: cdktn.stringToTerraform(this._identifier),
            name: cdktn.stringToTerraform(this._name),
            scopes: cdktn.listMapper(ccUserPoolResourceServerResourceServerScopeTypePropertyToTerraform, false)(this._scopes.internalValue),
            user_pool_id: cdktn.stringToTerraform(this._userPoolId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            identifier: {
                value: cdktn.stringToHclTerraform(this._identifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            scopes: {
                value: cdktn.listMapperHcl(ccUserPoolResourceServerResourceServerScopeTypePropertyToHclTerraform, false)(this._scopes.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcUserPoolResourceServer.ResourceServerScopeTypePropertyList",
            },
            user_pool_id: {
                value: cdktn.stringToHclTerraform(this._userPoolId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserPoolResourceServerResourceServerScopeTypePropertyToTerraform(struct?: CcUserPoolResourceServer.ResourceServerScopeTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scope_description: cdktn.stringToTerraform(struct!.scopeDescription),
        scope_name: cdktn.stringToTerraform(struct!.scopeName),
    }
}


export function ccUserPoolResourceServerResourceServerScopeTypePropertyToHclTerraform(struct?: CcUserPoolResourceServer.ResourceServerScopeTypeProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scope_description: {
            value: cdktn.stringToHclTerraform(struct!.scopeDescription),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        scope_name: {
            value: cdktn.stringToHclTerraform(struct!.scopeName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcUserPoolResourceServer {
export interface ResourceServerScopeTypeProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_resource_server#scope_description CcUserPoolResourceServer#scope_description}
    */
    readonly scopeDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/cognito_user_pool_resource_server#scope_name CcUserPoolResourceServer#scope_name}
    */
    readonly scopeName?: string;
}
export class ResourceServerScopeTypePropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ResourceServerScopeTypeProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scopeDescription !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopeDescription = this._scopeDescription;
        }
        if (this._scopeName !== undefined) {
            hasAnyValues = true;
            internalValueResult.scopeName = this._scopeName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ResourceServerScopeTypeProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scopeDescription = undefined;
            this._scopeName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scopeDescription = value.scopeDescription;
            this._scopeName = value.scopeName;
        }
    }

    // scope_description - computed: true, optional: true, required: false
    private _scopeDescription?: string; 
    public get scopeDescription() {
        return this.getStringAttribute('scope_description');
    }
    public set scopeDescription(value: string) {
        this._scopeDescription = value;
    }
    public resetScopeDescription() {
        this._scopeDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeDescriptionInput() {
        return this._scopeDescription;
    }

    // scope_name - computed: true, optional: true, required: false
    private _scopeName?: string; 
    public get scopeName() {
        return this.getStringAttribute('scope_name');
    }
    public set scopeName(value: string) {
        this._scopeName = value;
    }
    public resetScopeName() {
        this._scopeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeNameInput() {
        return this._scopeName;
    }
}

export class ResourceServerScopeTypePropertyList extends cdktn.ComplexList {
    public internalValue? : ResourceServerScopeTypeProperty[] | cdktn.IResolvable

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
    public get(index: number): ResourceServerScopeTypePropertyOutputReference {
        return new ResourceServerScopeTypePropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
