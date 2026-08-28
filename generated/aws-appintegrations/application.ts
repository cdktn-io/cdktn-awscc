// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * The application configuration. Cannot be used when IsService is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#application_config CcApplication#application_config}
    */
    readonly applicationConfig?: CcApplication.ApplicationConfigProperty;
    /**
    * Application source config
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#application_source_config CcApplication#application_source_config}
    */
    readonly applicationSourceConfig: CcApplication.ApplicationSourceConfigProperty;
    /**
    * The type of application
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#application_type CcApplication#application_type}
    */
    readonly applicationType?: string;
    /**
    * The application description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#description CcApplication#description}
    */
    readonly description?: string;
    /**
    * The iframe configuration
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#iframe_config CcApplication#iframe_config}
    */
    readonly iframeConfig?: CcApplication.IframeConfigProperty;
    /**
    * The initialization timeout in milliseconds. Required when IsService is true.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#initialization_timeout CcApplication#initialization_timeout}
    */
    readonly initializationTimeout?: number;
    /**
    * Indicates if the application is a service
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#is_service CcApplication#is_service}
    */
    readonly isService?: boolean | cdktn.IResolvable;
    /**
    * The name of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#name CcApplication#name}
    */
    readonly name: string;
    /**
    * The namespace of the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#namespace CcApplication#namespace}
    */
    readonly namespace: string;
    /**
    * The configuration of events or requests that the application has access to.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#permissions CcApplication#permissions}
    */
    readonly permissions?: string[];
    /**
    * The tags (keys and values) associated with the application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#tags CcApplication#tags}
    */
    readonly tags?: CcApplication.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application awscc_appintegrations_application}
*/
export class CcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_appintegrations_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplication to import
    * @param importFromId The id of the existing CcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_appintegrations_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application awscc_appintegrations_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_appintegrations_application',
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
        this._applicationConfig.internalValue = config.applicationConfig;
        this._applicationSourceConfig.internalValue = config.applicationSourceConfig;
        this._applicationType = config.applicationType;
        this._description = config.description;
        this._iframeConfig.internalValue = config.iframeConfig;
        this._initializationTimeout = config.initializationTimeout;
        this._isService = config.isService;
        this._name = config.name;
        this._namespace = config.namespace;
        this._permissions = config.permissions;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_arn - computed: true, optional: false, required: false
    public get applicationArn() {
        return this.getStringAttribute('application_arn');
    }

    // application_config - computed: true, optional: true, required: false
    private _applicationConfig = new CcApplication.ApplicationConfigPropertyOutputReference(this, "application_config");
    public get applicationConfig() {
        return this._applicationConfig;
    }
    public putApplicationConfig(value: CcApplication.ApplicationConfigProperty) {
        this._applicationConfig.internalValue = value;
    }
    public resetApplicationConfig() {
        this._applicationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationConfigInput() {
        return this._applicationConfig.internalValue;
    }

    // application_id - computed: true, optional: false, required: false
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }

    // application_source_config - computed: false, optional: false, required: true
    private _applicationSourceConfig = new CcApplication.ApplicationSourceConfigPropertyOutputReference(this, "application_source_config");
    public get applicationSourceConfig() {
        return this._applicationSourceConfig;
    }
    public putApplicationSourceConfig(value: CcApplication.ApplicationSourceConfigProperty) {
        this._applicationSourceConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationSourceConfigInput() {
        return this._applicationSourceConfig.internalValue;
    }

    // application_type - computed: true, optional: true, required: false
    private _applicationType?: string; 
    public get applicationType() {
        return this.getStringAttribute('application_type');
    }
    public set applicationType(value: string) {
        this._applicationType = value;
    }
    public resetApplicationType() {
        this._applicationType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationTypeInput() {
        return this._applicationType;
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

    // iframe_config - computed: true, optional: true, required: false
    private _iframeConfig = new CcApplication.IframeConfigPropertyOutputReference(this, "iframe_config");
    public get iframeConfig() {
        return this._iframeConfig;
    }
    public putIframeConfig(value: CcApplication.IframeConfigProperty) {
        this._iframeConfig.internalValue = value;
    }
    public resetIframeConfig() {
        this._iframeConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iframeConfigInput() {
        return this._iframeConfig.internalValue;
    }

    // initialization_timeout - computed: true, optional: true, required: false
    private _initializationTimeout?: number; 
    public get initializationTimeout() {
        return this.getNumberAttribute('initialization_timeout');
    }
    public set initializationTimeout(value: number) {
        this._initializationTimeout = value;
    }
    public resetInitializationTimeout() {
        this._initializationTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get initializationTimeoutInput() {
        return this._initializationTimeout;
    }

    // is_service - computed: true, optional: true, required: false
    private _isService?: boolean | cdktn.IResolvable; 
    public get isService() {
        return this.getBooleanAttribute('is_service');
    }
    public set isService(value: boolean | cdktn.IResolvable) {
        this._isService = value;
    }
    public resetIsService() {
        this._isService = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isServiceInput() {
        return this._isService;
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

    // namespace - computed: false, optional: false, required: true
    private _namespace?: string; 
    public get namespace() {
        return this.getStringAttribute('namespace');
    }
    public set namespace(value: string) {
        this._namespace = value;
    }
    // Temporarily expose input value. Use with caution.
    public get namespaceInput() {
        return this._namespace;
    }

    // permissions - computed: true, optional: true, required: false
    private _permissions?: string[]; 
    public get permissions() {
        return this.getListAttribute('permissions');
    }
    public set permissions(value: string[]) {
        this._permissions = value;
    }
    public resetPermissions() {
        this._permissions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get permissionsInput() {
        return this._permissions;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            application_config: ccApplicationApplicationConfigPropertyToTerraform(this._applicationConfig.internalValue),
            application_source_config: ccApplicationApplicationSourceConfigPropertyToTerraform(this._applicationSourceConfig.internalValue),
            application_type: cdktn.stringToTerraform(this._applicationType),
            description: cdktn.stringToTerraform(this._description),
            iframe_config: ccApplicationIframeConfigPropertyToTerraform(this._iframeConfig.internalValue),
            initialization_timeout: cdktn.numberToTerraform(this._initializationTimeout),
            is_service: cdktn.booleanToTerraform(this._isService),
            name: cdktn.stringToTerraform(this._name),
            namespace: cdktn.stringToTerraform(this._namespace),
            permissions: cdktn.listMapper(cdktn.stringToTerraform, false)(this._permissions),
            tags: cdktn.listMapper(ccApplicationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_config: {
                value: ccApplicationApplicationConfigPropertyToHclTerraform(this._applicationConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.ApplicationConfigProperty",
            },
            application_source_config: {
                value: ccApplicationApplicationSourceConfigPropertyToHclTerraform(this._applicationSourceConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.ApplicationSourceConfigProperty",
            },
            application_type: {
                value: cdktn.stringToHclTerraform(this._applicationType),
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
            iframe_config: {
                value: ccApplicationIframeConfigPropertyToHclTerraform(this._iframeConfig.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcApplication.IframeConfigProperty",
            },
            initialization_timeout: {
                value: cdktn.numberToHclTerraform(this._initializationTimeout),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            is_service: {
                value: cdktn.booleanToHclTerraform(this._isService),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            namespace: {
                value: cdktn.stringToHclTerraform(this._namespace),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            permissions: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._permissions),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccApplicationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplication.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationContactHandlingPropertyToTerraform(struct?: CcApplication.ContactHandlingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        scope: cdktn.stringToTerraform(struct!.scope),
    }
}


export function ccApplicationContactHandlingPropertyToHclTerraform(struct?: CcApplication.ContactHandlingProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        scope: {
            value: cdktn.stringToHclTerraform(struct!.scope),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationApplicationConfigPropertyToTerraform(struct?: CcApplication.ApplicationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contact_handling: ccApplicationContactHandlingPropertyToTerraform(struct!.contactHandling),
    }
}


export function ccApplicationApplicationConfigPropertyToHclTerraform(struct?: CcApplication.ApplicationConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contact_handling: {
            value: ccApplicationContactHandlingPropertyToHclTerraform(struct!.contactHandling),
            isBlock: true,
            type: "struct",
            storageClassType: "ContactHandlingProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationExternalUrlConfigPropertyToTerraform(struct?: CcApplication.ExternalUrlConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        access_url: cdktn.stringToTerraform(struct!.accessUrl),
        approved_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.approvedOrigins),
    }
}


export function ccApplicationExternalUrlConfigPropertyToHclTerraform(struct?: CcApplication.ExternalUrlConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        access_url: {
            value: cdktn.stringToHclTerraform(struct!.accessUrl),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        approved_origins: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.approvedOrigins),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationApplicationSourceConfigPropertyToTerraform(struct?: CcApplication.ApplicationSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        external_url_config: ccApplicationExternalUrlConfigPropertyToTerraform(struct!.externalUrlConfig),
    }
}


export function ccApplicationApplicationSourceConfigPropertyToHclTerraform(struct?: CcApplication.ApplicationSourceConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        external_url_config: {
            value: ccApplicationExternalUrlConfigPropertyToHclTerraform(struct!.externalUrlConfig),
            isBlock: true,
            type: "struct",
            storageClassType: "ExternalUrlConfigProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationIframeConfigPropertyToTerraform(struct?: CcApplication.IframeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        allow: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allow),
        sandbox: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.sandbox),
    }
}


export function ccApplicationIframeConfigPropertyToHclTerraform(struct?: CcApplication.IframeConfigProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        allow: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allow),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
        sandbox: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.sandbox),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
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
export interface ContactHandlingProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#scope CcApplication#scope}
    */
    readonly scope?: string;
}
export class ContactHandlingPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ContactHandlingProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._scope !== undefined) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ContactHandlingProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._scope = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._scope = value.scope;
        }
    }

    // scope - computed: true, optional: true, required: false
    private _scope?: string; 
    public get scope() {
        return this.getStringAttribute('scope');
    }
    public set scope(value: string) {
        this._scope = value;
    }
    public resetScope() {
        this._scope = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scopeInput() {
        return this._scope;
    }
}
export interface ApplicationConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#contact_handling CcApplication#contact_handling}
    */
    readonly contactHandling?: ContactHandlingProperty;
}
export class ApplicationConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApplicationConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contactHandling?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactHandling = this._contactHandling?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contactHandling.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contactHandling.internalValue = value.contactHandling;
        }
    }

    // contact_handling - computed: true, optional: true, required: false
    private _contactHandling = new ContactHandlingPropertyOutputReference(this, "contact_handling");
    public get contactHandling() {
        return this._contactHandling;
    }
    public putContactHandling(value: ContactHandlingProperty) {
        this._contactHandling.internalValue = value;
    }
    public resetContactHandling() {
        this._contactHandling.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactHandlingInput() {
        return this._contactHandling.internalValue;
    }
}
export interface ExternalUrlConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#access_url CcApplication#access_url}
    */
    readonly accessUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#approved_origins CcApplication#approved_origins}
    */
    readonly approvedOrigins?: string[];
}
export class ExternalUrlConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ExternalUrlConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._accessUrl !== undefined) {
            hasAnyValues = true;
            internalValueResult.accessUrl = this._accessUrl;
        }
        if (this._approvedOrigins !== undefined) {
            hasAnyValues = true;
            internalValueResult.approvedOrigins = this._approvedOrigins;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ExternalUrlConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._accessUrl = undefined;
            this._approvedOrigins = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._accessUrl = value.accessUrl;
            this._approvedOrigins = value.approvedOrigins;
        }
    }

    // access_url - computed: false, optional: false, required: true
    private _accessUrl?: string; 
    public get accessUrl() {
        return this.getStringAttribute('access_url');
    }
    public set accessUrl(value: string) {
        this._accessUrl = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accessUrlInput() {
        return this._accessUrl;
    }

    // approved_origins - computed: true, optional: true, required: false
    private _approvedOrigins?: string[]; 
    public get approvedOrigins() {
        return this.getListAttribute('approved_origins');
    }
    public set approvedOrigins(value: string[]) {
        this._approvedOrigins = value;
    }
    public resetApprovedOrigins() {
        this._approvedOrigins = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get approvedOriginsInput() {
        return this._approvedOrigins;
    }
}
export interface ApplicationSourceConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#external_url_config CcApplication#external_url_config}
    */
    readonly externalUrlConfig: ExternalUrlConfigProperty;
}
export class ApplicationSourceConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): ApplicationSourceConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._externalUrlConfig?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.externalUrlConfig = this._externalUrlConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ApplicationSourceConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._externalUrlConfig.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._externalUrlConfig.internalValue = value.externalUrlConfig;
        }
    }

    // external_url_config - computed: false, optional: false, required: true
    private _externalUrlConfig = new ExternalUrlConfigPropertyOutputReference(this, "external_url_config");
    public get externalUrlConfig() {
        return this._externalUrlConfig;
    }
    public putExternalUrlConfig(value: ExternalUrlConfigProperty) {
        this._externalUrlConfig.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get externalUrlConfigInput() {
        return this._externalUrlConfig.internalValue;
    }
}
export interface IframeConfigProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#allow CcApplication#allow}
    */
    readonly allow?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#sandbox CcApplication#sandbox}
    */
    readonly sandbox?: string[];
}
export class IframeConfigPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IframeConfigProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._allow !== undefined) {
            hasAnyValues = true;
            internalValueResult.allow = this._allow;
        }
        if (this._sandbox !== undefined) {
            hasAnyValues = true;
            internalValueResult.sandbox = this._sandbox;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IframeConfigProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._allow = undefined;
            this._sandbox = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._allow = value.allow;
            this._sandbox = value.sandbox;
        }
    }

    // allow - computed: true, optional: true, required: false
    private _allow?: string[]; 
    public get allow() {
        return this.getListAttribute('allow');
    }
    public set allow(value: string[]) {
        this._allow = value;
    }
    public resetAllow() {
        this._allow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get allowInput() {
        return this._allow;
    }

    // sandbox - computed: true, optional: true, required: false
    private _sandbox?: string[]; 
    public get sandbox() {
        return this.getListAttribute('sandbox');
    }
    public set sandbox(value: string[]) {
        this._sandbox = value;
    }
    public resetSandbox() {
        this._sandbox = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sandboxInput() {
        return this._sandbox;
    }
}
export interface TagProperty {
    /**
    * A key to identify the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#key CcApplication#key}
    */
    readonly key?: string;
    /**
    * Corresponding tag value for the key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/appintegrations_application#value CcApplication#value}
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
