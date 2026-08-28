// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcCodeSecurityIntegrationProps extends cdktn.TerraformMetaArguments {
    /**
    * Create Integration Details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#create_integration_details CcCodeSecurityIntegration#create_integration_details}
    */
    readonly createIntegrationDetails?: CcCodeSecurityIntegration.CreateDetailsProperty;
    /**
    * Code Security Integration name
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#name CcCodeSecurityIntegration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#tags CcCodeSecurityIntegration#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Integration Type
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#type CcCodeSecurityIntegration#type}
    */
    readonly type?: string;
    /**
    * Update Integration Details
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#update_integration_details CcCodeSecurityIntegration#update_integration_details}
    */
    readonly updateIntegrationDetails?: CcCodeSecurityIntegration.UpdateDetailsProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration}
*/
export class CcCodeSecurityIntegration extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_inspectorv2_code_security_integration";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcCodeSecurityIntegration resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcCodeSecurityIntegration to import
    * @param importFromId The id of the existing CcCodeSecurityIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcCodeSecurityIntegration to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_inspectorv2_code_security_integration", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcCodeSecurityIntegrationProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcCodeSecurityIntegrationProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_inspectorv2_code_security_integration',
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
        this._createIntegrationDetails.internalValue = config.createIntegrationDetails;
        this._name = config.name;
        this._tags = config.tags;
        this._type = config.type;
        this._updateIntegrationDetails.internalValue = config.updateIntegrationDetails;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // authorization_url - computed: true, optional: false, required: false
    public get authorizationUrl() {
        return this.getStringAttribute('authorization_url');
    }

    // create_integration_details - computed: true, optional: true, required: false
    private _createIntegrationDetails = new CcCodeSecurityIntegration.CreateDetailsPropertyOutputReference(this, "create_integration_details");
    public get createIntegrationDetails() {
        return this._createIntegrationDetails;
    }
    public putCreateIntegrationDetails(value: CcCodeSecurityIntegration.CreateDetailsProperty) {
        this._createIntegrationDetails.internalValue = value;
    }
    public resetCreateIntegrationDetails() {
        this._createIntegrationDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createIntegrationDetailsInput() {
        return this._createIntegrationDetails.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_updated_at - computed: true, optional: false, required: false
    public get lastUpdatedAt() {
        return this.getStringAttribute('last_updated_at');
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

    // status - computed: true, optional: false, required: false
    public get status() {
        return this.getStringAttribute('status');
    }

    // status_reason - computed: true, optional: false, required: false
    public get statusReason() {
        return this.getStringAttribute('status_reason');
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

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // update_integration_details - computed: true, optional: true, required: false
    private _updateIntegrationDetails = new CcCodeSecurityIntegration.UpdateDetailsPropertyOutputReference(this, "update_integration_details");
    public get updateIntegrationDetails() {
        return this._updateIntegrationDetails;
    }
    public putUpdateIntegrationDetails(value: CcCodeSecurityIntegration.UpdateDetailsProperty) {
        this._updateIntegrationDetails.internalValue = value;
    }
    public resetUpdateIntegrationDetails() {
        this._updateIntegrationDetails.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get updateIntegrationDetailsInput() {
        return this._updateIntegrationDetails.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            create_integration_details: ccCodeSecurityIntegrationCreateDetailsPropertyToTerraform(this._createIntegrationDetails.internalValue),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            type: cdktn.stringToTerraform(this._type),
            update_integration_details: ccCodeSecurityIntegrationUpdateDetailsPropertyToTerraform(this._updateIntegrationDetails.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            create_integration_details: {
                value: ccCodeSecurityIntegrationCreateDetailsPropertyToHclTerraform(this._createIntegrationDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCodeSecurityIntegration.CreateDetailsProperty",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
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
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            update_integration_details: {
                value: ccCodeSecurityIntegrationUpdateDetailsPropertyToHclTerraform(this._updateIntegrationDetails.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcCodeSecurityIntegration.UpdateDetailsProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccCodeSecurityIntegrationCreateGitLabSelfManagedIntegrationDetailPropertyToTerraform(struct?: CcCodeSecurityIntegration.CreateGitLabSelfManagedIntegrationDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_token: cdktn.stringToTerraform(struct!.accessToken),
        instance_url: cdktn.stringToTerraform(struct!.instanceUrl),
    }
}


export function ccCodeSecurityIntegrationCreateGitLabSelfManagedIntegrationDetailPropertyToHclTerraform(struct?: CcCodeSecurityIntegration.CreateGitLabSelfManagedIntegrationDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_token: {
            value: cdktn.stringToHclTerraform(struct!.accessToken),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        instance_url: {
            value: cdktn.stringToHclTerraform(struct!.instanceUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCodeSecurityIntegrationCreateDetailsPropertyToTerraform(struct?: CcCodeSecurityIntegration.CreateDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        gitlab_self_managed: ccCodeSecurityIntegrationCreateGitLabSelfManagedIntegrationDetailPropertyToTerraform(struct!.gitlabSelfManaged),
    }
}


export function ccCodeSecurityIntegrationCreateDetailsPropertyToHclTerraform(struct?: CcCodeSecurityIntegration.CreateDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        gitlab_self_managed: {
            value: ccCodeSecurityIntegrationCreateGitLabSelfManagedIntegrationDetailPropertyToHclTerraform(struct!.gitlabSelfManaged),
            isBlock: true,
            type: "struct",
            storageClassType: "CreateGitLabSelfManagedIntegrationDetailProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCodeSecurityIntegrationUpdateGitHubIntegrationDetailPropertyToTerraform(struct?: CcCodeSecurityIntegration.UpdateGitHubIntegrationDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        code: cdktn.stringToTerraform(struct!.code),
        installation_id: cdktn.stringToTerraform(struct!.installationId),
    }
}


export function ccCodeSecurityIntegrationUpdateGitHubIntegrationDetailPropertyToHclTerraform(struct?: CcCodeSecurityIntegration.UpdateGitHubIntegrationDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        code: {
            value: cdktn.stringToHclTerraform(struct!.code),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        installation_id: {
            value: cdktn.stringToHclTerraform(struct!.installationId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCodeSecurityIntegrationUpdateGitLabSelfManagedIntegrationDetailPropertyToTerraform(struct?: CcCodeSecurityIntegration.UpdateGitLabSelfManagedIntegrationDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auth_code: cdktn.stringToTerraform(struct!.authCode),
    }
}


export function ccCodeSecurityIntegrationUpdateGitLabSelfManagedIntegrationDetailPropertyToHclTerraform(struct?: CcCodeSecurityIntegration.UpdateGitLabSelfManagedIntegrationDetailProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auth_code: {
            value: cdktn.stringToHclTerraform(struct!.authCode),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccCodeSecurityIntegrationUpdateDetailsPropertyToTerraform(struct?: CcCodeSecurityIntegration.UpdateDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        github: ccCodeSecurityIntegrationUpdateGitHubIntegrationDetailPropertyToTerraform(struct!.github),
        gitlab_self_managed: ccCodeSecurityIntegrationUpdateGitLabSelfManagedIntegrationDetailPropertyToTerraform(struct!.gitlabSelfManaged),
    }
}


export function ccCodeSecurityIntegrationUpdateDetailsPropertyToHclTerraform(struct?: CcCodeSecurityIntegration.UpdateDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        github: {
            value: ccCodeSecurityIntegrationUpdateGitHubIntegrationDetailPropertyToHclTerraform(struct!.github),
            isBlock: true,
            type: "struct",
            storageClassType: "UpdateGitHubIntegrationDetailProperty",
        },
        gitlab_self_managed: {
            value: ccCodeSecurityIntegrationUpdateGitLabSelfManagedIntegrationDetailPropertyToHclTerraform(struct!.gitlabSelfManaged),
            isBlock: true,
            type: "struct",
            storageClassType: "UpdateGitLabSelfManagedIntegrationDetailProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcCodeSecurityIntegration {
export interface CreateGitLabSelfManagedIntegrationDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#access_token CcCodeSecurityIntegration#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#instance_url CcCodeSecurityIntegration#instance_url}
    */
    readonly instanceUrl?: string;
}
export class CreateGitLabSelfManagedIntegrationDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateGitLabSelfManagedIntegrationDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessToken !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessToken = this._accessToken;
        }
        if (this._instanceUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.instanceUrl = this._instanceUrl;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateGitLabSelfManagedIntegrationDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessToken = undefined;
            this._instanceUrl = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessToken = value.accessToken;
            this._instanceUrl = value.instanceUrl;
        }
    }

    // access_token - computed: true, optional: true, required: false
    private _accessToken?: string; 
    public get accessToken() {
        return this.getStringAttribute('access_token');
    }
    public set accessToken(value: string) {
        this._accessToken = value;
    }
    public resetAccessToken() {
        this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessTokenInput() {
        return this._accessToken;
    }

    // instance_url - computed: true, optional: true, required: false
    private _instanceUrl?: string; 
    public get instanceUrl() {
        return this.getStringAttribute('instance_url');
    }
    public set instanceUrl(value: string) {
        this._instanceUrl = value;
    }
    public resetInstanceUrl() {
        this._instanceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceUrlInput() {
        return this._instanceUrl;
    }
}
export interface CreateDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed CcCodeSecurityIntegration#gitlab_self_managed}
    */
    readonly gitlabSelfManaged?: CreateGitLabSelfManagedIntegrationDetailProperty;
}
export class CreateDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): CreateDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._gitlabSelfManaged?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitlabSelfManaged = this._gitlabSelfManaged?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CreateDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._gitlabSelfManaged.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._gitlabSelfManaged.internalValue = value.gitlabSelfManaged;
        }
    }

    // gitlab_self_managed - computed: true, optional: true, required: false
    private _gitlabSelfManaged = new CreateGitLabSelfManagedIntegrationDetailPropertyOutputReference(this, "gitlab_self_managed");
    public get gitlabSelfManaged() {
        return this._gitlabSelfManaged;
    }
    public putGitlabSelfManaged(value: CreateGitLabSelfManagedIntegrationDetailProperty) {
        this._gitlabSelfManaged.internalValue = value;
    }
    public resetGitlabSelfManaged() {
        this._gitlabSelfManaged.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitlabSelfManagedInput() {
        return this._gitlabSelfManaged.internalValue;
    }
}
export interface UpdateGitHubIntegrationDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#code CcCodeSecurityIntegration#code}
    */
    readonly code?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#installation_id CcCodeSecurityIntegration#installation_id}
    */
    readonly installationId?: string;
}
export class UpdateGitHubIntegrationDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UpdateGitHubIntegrationDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._code !== undefined) {
            hasAnyValues = true;
            internalValueResult.code = this._code;
        }
        if (this._installationId !== undefined) {
            hasAnyValues = true;
            internalValueResult.installationId = this._installationId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UpdateGitHubIntegrationDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._code = undefined;
            this._installationId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._code = value.code;
            this._installationId = value.installationId;
        }
    }

    // code - computed: true, optional: true, required: false
    private _code?: string; 
    public get code() {
        return this.getStringAttribute('code');
    }
    public set code(value: string) {
        this._code = value;
    }
    public resetCode() {
        this._code = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get codeInput() {
        return this._code;
    }

    // installation_id - computed: true, optional: true, required: false
    private _installationId?: string; 
    public get installationId() {
        return this.getStringAttribute('installation_id');
    }
    public set installationId(value: string) {
        this._installationId = value;
    }
    public resetInstallationId() {
        this._installationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get installationIdInput() {
        return this._installationId;
    }
}
export interface UpdateGitLabSelfManagedIntegrationDetailProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#auth_code CcCodeSecurityIntegration#auth_code}
    */
    readonly authCode?: string;
}
export class UpdateGitLabSelfManagedIntegrationDetailPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UpdateGitLabSelfManagedIntegrationDetailProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._authCode !== undefined) {
            hasAnyValues = true;
            internalValueResult.authCode = this._authCode;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UpdateGitLabSelfManagedIntegrationDetailProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._authCode = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._authCode = value.authCode;
        }
    }

    // auth_code - computed: true, optional: true, required: false
    private _authCode?: string; 
    public get authCode() {
        return this.getStringAttribute('auth_code');
    }
    public set authCode(value: string) {
        this._authCode = value;
    }
    public resetAuthCode() {
        this._authCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authCodeInput() {
        return this._authCode;
    }
}
export interface UpdateDetailsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#github CcCodeSecurityIntegration#github}
    */
    readonly github?: UpdateGitHubIntegrationDetailProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed CcCodeSecurityIntegration#gitlab_self_managed}
    */
    readonly gitlabSelfManaged?: UpdateGitLabSelfManagedIntegrationDetailProperty;
}
export class UpdateDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): UpdateDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._github?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.github = this._github?.internalValue;
        }
        if (this._gitlabSelfManaged?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.gitlabSelfManaged = this._gitlabSelfManaged?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: UpdateDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._github.internalValue = undefined;
            this._gitlabSelfManaged.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._github.internalValue = value.github;
            this._gitlabSelfManaged.internalValue = value.gitlabSelfManaged;
        }
    }

    // github - computed: true, optional: true, required: false
    private _github = new UpdateGitHubIntegrationDetailPropertyOutputReference(this, "github");
    public get github() {
        return this._github;
    }
    public putGithub(value: UpdateGitHubIntegrationDetailProperty) {
        this._github.internalValue = value;
    }
    public resetGithub() {
        this._github.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get githubInput() {
        return this._github.internalValue;
    }

    // gitlab_self_managed - computed: true, optional: true, required: false
    private _gitlabSelfManaged = new UpdateGitLabSelfManagedIntegrationDetailPropertyOutputReference(this, "gitlab_self_managed");
    public get gitlabSelfManaged() {
        return this._gitlabSelfManaged;
    }
    public putGitlabSelfManaged(value: UpdateGitLabSelfManagedIntegrationDetailProperty) {
        this._gitlabSelfManaged.internalValue = value;
    }
    public resetGitlabSelfManaged() {
        this._gitlabSelfManaged.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get gitlabSelfManagedInput() {
        return this._gitlabSelfManaged.internalValue;
    }
}
}
