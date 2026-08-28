// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#api_gateway_proxy CcApplication#api_gateway_proxy}
    */
    readonly apiGatewayProxy?: CcApplication.ApiGatewayProxyInputProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#environment_identifier CcApplication#environment_identifier}
    */
    readonly environmentIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#name CcApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#proxy_type CcApplication#proxy_type}
    */
    readonly proxyType: string;
    /**
    * Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#tags CcApplication#tags}
    */
    readonly tags?: CcApplication.TagProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#vpc_id CcApplication#vpc_id}
    */
    readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application awscc_refactorspaces_application}
*/
export class CcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_refactorspaces_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplication to import
    * @param importFromId The id of the existing CcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_refactorspaces_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application awscc_refactorspaces_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_refactorspaces_application',
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
        this._apiGatewayProxy.internalValue = config.apiGatewayProxy;
        this._environmentIdentifier = config.environmentIdentifier;
        this._name = config.name;
        this._proxyType = config.proxyType;
        this._tags.internalValue = config.tags;
        this._vpcId = config.vpcId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_gateway_id - computed: true, optional: false, required: false
    public get apiGatewayId() {
        return this.getStringAttribute('api_gateway_id');
    }

    // api_gateway_proxy - computed: true, optional: true, required: false
    private _apiGatewayProxy = new CcApplication.ApiGatewayProxyInputPropertyOutputReference(this, "api_gateway_proxy");
    public get apiGatewayProxy() {
        return this._apiGatewayProxy;
    }
    public putApiGatewayProxy(value: CcApplication.ApiGatewayProxyInputProperty) {
        this._apiGatewayProxy.internalValue = value;
    }
    public resetApiGatewayProxy() {
        this._apiGatewayProxy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiGatewayProxyInput() {
        return this._apiGatewayProxy.internalValue;
    }

    // application_identifier - computed: true, optional: false, required: false
    public get applicationIdentifier() {
        return this.getStringAttribute('application_identifier');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // environment_identifier - computed: false, optional: false, required: true
    private _environmentIdentifier?: string; 
    public get environmentIdentifier() {
        return this.getStringAttribute('environment_identifier');
    }
    public set environmentIdentifier(value: string) {
        this._environmentIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get environmentIdentifierInput() {
        return this._environmentIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // nlb_arn - computed: true, optional: false, required: false
    public get nlbArn() {
        return this.getStringAttribute('nlb_arn');
    }

    // nlb_name - computed: true, optional: false, required: false
    public get nlbName() {
        return this.getStringAttribute('nlb_name');
    }

    // proxy_type - computed: false, optional: false, required: true
    private _proxyType?: string; 
    public get proxyType() {
        return this.getStringAttribute('proxy_type');
    }
    public set proxyType(value: string) {
        this._proxyType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get proxyTypeInput() {
        return this._proxyType;
    }

    // proxy_url - computed: true, optional: false, required: false
    public get proxyUrl() {
        return this.getStringAttribute('proxy_url');
    }

    // stage_name - computed: true, optional: false, required: false
    public get stageName() {
        return this.getStringAttribute('stage_name');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcApplication.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcApplication.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // vpc_id - computed: false, optional: false, required: true
    private _vpcId?: string; 
    public get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    public set vpcId(value: string) {
        this._vpcId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcIdInput() {
        return this._vpcId;
    }

    // vpc_link_id - computed: true, optional: false, required: false
    public get vpcLinkId() {
        return this.getStringAttribute('vpc_link_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            api_gateway_proxy: ccApplicationApiGatewayProxyInputPropertyToTerraform(this._apiGatewayProxy.internalValue),
            environment_identifier: cdktn.stringToTerraform(this._environmentIdentifier),
            name: cdktn.stringToTerraform(this._name),
            proxy_type: cdktn.stringToTerraform(this._proxyType),
            tags: cdktn.listMapper(ccApplicationTagPropertyToTerraform, false)(this._tags.internalValue),
            vpc_id: cdktn.stringToTerraform(this._vpcId),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            api_gateway_proxy: {
                value: ccApplicationApiGatewayProxyInputPropertyToHclTerraform(this._apiGatewayProxy.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.ApiGatewayProxyInputProperty",
            },
            environment_identifier: {
                value: cdktn.stringToHclTerraform(this._environmentIdentifier),
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
            proxy_type: {
                value: cdktn.stringToHclTerraform(this._proxyType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccApplicationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplication.TagPropertyList",
            },
            vpc_id: {
                value: cdktn.stringToHclTerraform(this._vpcId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationApiGatewayProxyInputPropertyToTerraform(struct?: CcApplication.ApiGatewayProxyInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        endpoint_type: cdktn.stringToTerraform(struct!.endpointType),
        stage_name: cdktn.stringToTerraform(struct!.stageName),
    }
}


export function ccApplicationApiGatewayProxyInputPropertyToHclTerraform(struct?: CcApplication.ApiGatewayProxyInputProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        endpoint_type: {
            value: cdktn.stringToHclTerraform(struct!.endpointType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        stage_name: {
            value: cdktn.stringToHclTerraform(struct!.stageName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationTagPropertyToTerraform(struct?: CcApplication.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccApplicationTagPropertyToHclTerraform(struct?: CcApplication.TagProperty | cdktn.IResolvable): any {
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


export namespace CcApplication {
export interface ApiGatewayProxyInputProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#endpoint_type CcApplication#endpoint_type}
    */
    readonly endpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#stage_name CcApplication#stage_name}
    */
    readonly stageName?: string;
}
export class ApiGatewayProxyInputPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApiGatewayProxyInputProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._endpointType !== undefined) {
            hasAnyValues = true;
            internalValueResult.endpointType = this._endpointType;
        }
        if (this._stageName !== undefined) {
            hasAnyValues = true;
            internalValueResult.stageName = this._stageName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApiGatewayProxyInputProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._endpointType = undefined;
            this._stageName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._endpointType = value.endpointType;
            this._stageName = value.stageName;
        }
    }

    // endpoint_type - computed: true, optional: true, required: false
    private _endpointType?: string; 
    public get endpointType() {
        return this.getStringAttribute('endpoint_type');
    }
    public set endpointType(value: string) {
        this._endpointType = value;
    }
    public resetEndpointType() {
        this._endpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointTypeInput() {
        return this._endpointType;
    }

    // stage_name - computed: true, optional: true, required: false
    private _stageName?: string; 
    public get stageName() {
        return this.getStringAttribute('stage_name');
    }
    public set stageName(value: string) {
        this._stageName = value;
    }
    public resetStageName() {
        this._stageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageNameInput() {
        return this._stageName;
    }
}
export interface TagProperty {
    /**
    * A string used to identify this tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#key CcApplication#key}
    */
    readonly key?: string;
    /**
    * A string containing the value for the tag
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/refactorspaces_application#value CcApplication#value}
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
