// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcApplicationProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#application_id CcApplication#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#application_type CcApplication#application_type}
    */
    readonly applicationType: string;
    /**
    * This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#components_info CcApplication#components_info}
    */
    readonly componentsInfo?: CcApplication.ComponentInfoProperty[] | cdktn.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#credentials CcApplication#credentials}
    */
    readonly credentials?: CcApplication.CredentialProperty[] | cdktn.IResolvable;
    /**
    * The ARN of the SAP HANA database
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#database_arn CcApplication#database_arn}
    */
    readonly databaseArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#instances CcApplication#instances}
    */
    readonly instances?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#sap_instance_number CcApplication#sap_instance_number}
    */
    readonly sapInstanceNumber?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#sid CcApplication#sid}
    */
    readonly sid?: string;
    /**
    * The tags of a SystemsManagerSAP application.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#tags CcApplication#tags}
    */
    readonly tags?: CcApplication.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application awscc_systemsmanagersap_application}
*/
export class CcApplication extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_systemsmanagersap_application";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcApplication resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcApplication to import
    * @param importFromId The id of the existing CcApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcApplication to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_systemsmanagersap_application", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application awscc_systemsmanagersap_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcApplicationProps
    */
    public constructor(scope: Construct, id: string, config: CcApplicationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_systemsmanagersap_application',
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
        this._applicationId = config.applicationId;
        this._applicationType = config.applicationType;
        this._componentsInfo.internalValue = config.componentsInfo;
        this._credentials.internalValue = config.credentials;
        this._databaseArn = config.databaseArn;
        this._instances = config.instances;
        this._sapInstanceNumber = config.sapInstanceNumber;
        this._sid = config.sid;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // application_id - computed: false, optional: false, required: true
    private _applicationId?: string; 
    public get applicationId() {
        return this.getStringAttribute('application_id');
    }
    public set applicationId(value: string) {
        this._applicationId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationIdInput() {
        return this._applicationId;
    }

    // application_type - computed: false, optional: false, required: true
    private _applicationType?: string; 
    public get applicationType() {
        return this.getStringAttribute('application_type');
    }
    public set applicationType(value: string) {
        this._applicationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get applicationTypeInput() {
        return this._applicationType;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // components_info - computed: true, optional: true, required: false
    private _componentsInfo = new CcApplication.ComponentInfoPropertyList(this, "components_info", false);
    public get componentsInfo() {
        return this._componentsInfo;
    }
    public putComponentsInfo(value: CcApplication.ComponentInfoProperty[] | cdktn.IResolvable) {
        this._componentsInfo.internalValue = value;
    }
    public resetComponentsInfo() {
        this._componentsInfo.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentsInfoInput() {
        return this._componentsInfo.internalValue;
    }

    // credentials - computed: true, optional: true, required: false
    private _credentials = new CcApplication.CredentialPropertyList(this, "credentials", false);
    public get credentials() {
        return this._credentials;
    }
    public putCredentials(value: CcApplication.CredentialProperty[] | cdktn.IResolvable) {
        this._credentials.internalValue = value;
    }
    public resetCredentials() {
        this._credentials.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
        return this._credentials.internalValue;
    }

    // database_arn - computed: true, optional: true, required: false
    private _databaseArn?: string; 
    public get databaseArn() {
        return this.getStringAttribute('database_arn');
    }
    public set databaseArn(value: string) {
        this._databaseArn = value;
    }
    public resetDatabaseArn() {
        this._databaseArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseArnInput() {
        return this._databaseArn;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instances - computed: true, optional: true, required: false
    private _instances?: string[]; 
    public get instances() {
        return this.getListAttribute('instances');
    }
    public set instances(value: string[]) {
        this._instances = value;
    }
    public resetInstances() {
        this._instances = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get instancesInput() {
        return this._instances;
    }

    // sap_instance_number - computed: true, optional: true, required: false
    private _sapInstanceNumber?: string; 
    public get sapInstanceNumber() {
        return this.getStringAttribute('sap_instance_number');
    }
    public set sapInstanceNumber(value: string) {
        this._sapInstanceNumber = value;
    }
    public resetSapInstanceNumber() {
        this._sapInstanceNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sapInstanceNumberInput() {
        return this._sapInstanceNumber;
    }

    // sid - computed: true, optional: true, required: false
    private _sid?: string; 
    public get sid() {
        return this.getStringAttribute('sid');
    }
    public set sid(value: string) {
        this._sid = value;
    }
    public resetSid() {
        this._sid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sidInput() {
        return this._sid;
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
            application_id: cdktn.stringToTerraform(this._applicationId),
            application_type: cdktn.stringToTerraform(this._applicationType),
            components_info: cdktn.listMapper(ccApplicationComponentInfoPropertyToTerraform, false)(this._componentsInfo.internalValue),
            credentials: cdktn.listMapper(ccApplicationCredentialPropertyToTerraform, false)(this._credentials.internalValue),
            database_arn: cdktn.stringToTerraform(this._databaseArn),
            instances: cdktn.listMapper(cdktn.stringToTerraform, false)(this._instances),
            sap_instance_number: cdktn.stringToTerraform(this._sapInstanceNumber),
            sid: cdktn.stringToTerraform(this._sid),
            tags: cdktn.listMapper(ccApplicationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            application_id: {
                value: cdktn.stringToHclTerraform(this._applicationId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            application_type: {
                value: cdktn.stringToHclTerraform(this._applicationType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            components_info: {
                value: cdktn.listMapperHcl(ccApplicationComponentInfoPropertyToHclTerraform, false)(this._componentsInfo.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplication.ComponentInfoPropertyList",
            },
            credentials: {
                value: cdktn.listMapperHcl(ccApplicationCredentialPropertyToHclTerraform, false)(this._credentials.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcApplication.CredentialPropertyList",
            },
            database_arn: {
                value: cdktn.stringToHclTerraform(this._databaseArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instances: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._instances),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            sap_instance_number: {
                value: cdktn.stringToHclTerraform(this._sapInstanceNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            sid: {
                value: cdktn.stringToHclTerraform(this._sid),
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
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccApplicationComponentInfoPropertyToTerraform(struct?: CcApplication.ComponentInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        component_type: cdktn.stringToTerraform(struct!.componentType),
        ec_2_instance_id: cdktn.stringToTerraform(struct!.ec2InstanceId),
        sid: cdktn.stringToTerraform(struct!.sid),
    }
}


export function ccApplicationComponentInfoPropertyToHclTerraform(struct?: CcApplication.ComponentInfoProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        component_type: {
            value: cdktn.stringToHclTerraform(struct!.componentType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ec_2_instance_id: {
            value: cdktn.stringToHclTerraform(struct!.ec2InstanceId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        sid: {
            value: cdktn.stringToHclTerraform(struct!.sid),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccApplicationCredentialPropertyToTerraform(struct?: CcApplication.CredentialProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        credential_type: cdktn.stringToTerraform(struct!.credentialType),
        database_name: cdktn.stringToTerraform(struct!.databaseName),
        secret_id: cdktn.stringToTerraform(struct!.secretId),
    }
}


export function ccApplicationCredentialPropertyToHclTerraform(struct?: CcApplication.CredentialProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        credential_type: {
            value: cdktn.stringToHclTerraform(struct!.credentialType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        database_name: {
            value: cdktn.stringToHclTerraform(struct!.databaseName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        secret_id: {
            value: cdktn.stringToHclTerraform(struct!.secretId),
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
export interface ComponentInfoProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#component_type CcApplication#component_type}
    */
    readonly componentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#ec_2_instance_id CcApplication#ec_2_instance_id}
    */
    readonly ec2InstanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#sid CcApplication#sid}
    */
    readonly sid?: string;
}
export class ComponentInfoPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): ComponentInfoProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._componentType !== undefined) {
            hasAnyValues = true;
            internalValueResult.componentType = this._componentType;
        }
        if (this._ec2InstanceId !== undefined) {
            hasAnyValues = true;
            internalValueResult.ec2InstanceId = this._ec2InstanceId;
        }
        if (this._sid !== undefined) {
            hasAnyValues = true;
            internalValueResult.sid = this._sid;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: ComponentInfoProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._componentType = undefined;
            this._ec2InstanceId = undefined;
            this._sid = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._componentType = value.componentType;
            this._ec2InstanceId = value.ec2InstanceId;
            this._sid = value.sid;
        }
    }

    // component_type - computed: true, optional: true, required: false
    private _componentType?: string; 
    public get componentType() {
        return this.getStringAttribute('component_type');
    }
    public set componentType(value: string) {
        this._componentType = value;
    }
    public resetComponentType() {
        this._componentType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get componentTypeInput() {
        return this._componentType;
    }

    // ec_2_instance_id - computed: true, optional: true, required: false
    private _ec2InstanceId?: string; 
    public get ec2InstanceId() {
        return this.getStringAttribute('ec_2_instance_id');
    }
    public set ec2InstanceId(value: string) {
        this._ec2InstanceId = value;
    }
    public resetEc2InstanceId() {
        this._ec2InstanceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ec2InstanceIdInput() {
        return this._ec2InstanceId;
    }

    // sid - computed: true, optional: true, required: false
    private _sid?: string; 
    public get sid() {
        return this.getStringAttribute('sid');
    }
    public set sid(value: string) {
        this._sid = value;
    }
    public resetSid() {
        this._sid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sidInput() {
        return this._sid;
    }
}

export class ComponentInfoPropertyList extends cdktn.ComplexList {
    public internalValue? : ComponentInfoProperty[] | cdktn.IResolvable

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
    public get(index: number): ComponentInfoPropertyOutputReference {
        return new ComponentInfoPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface CredentialProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#credential_type CcApplication#credential_type}
    */
    readonly credentialType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#database_name CcApplication#database_name}
    */
    readonly databaseName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#secret_id CcApplication#secret_id}
    */
    readonly secretId?: string;
}
export class CredentialPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): CredentialProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._credentialType !== undefined) {
            hasAnyValues = true;
            internalValueResult.credentialType = this._credentialType;
        }
        if (this._databaseName !== undefined) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._secretId !== undefined) {
            hasAnyValues = true;
            internalValueResult.secretId = this._secretId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: CredentialProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._credentialType = undefined;
            this._databaseName = undefined;
            this._secretId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._credentialType = value.credentialType;
            this._databaseName = value.databaseName;
            this._secretId = value.secretId;
        }
    }

    // credential_type - computed: true, optional: true, required: false
    private _credentialType?: string; 
    public get credentialType() {
        return this.getStringAttribute('credential_type');
    }
    public set credentialType(value: string) {
        this._credentialType = value;
    }
    public resetCredentialType() {
        this._credentialType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialTypeInput() {
        return this._credentialType;
    }

    // database_name - computed: true, optional: true, required: false
    private _databaseName?: string; 
    public get databaseName() {
        return this.getStringAttribute('database_name');
    }
    public set databaseName(value: string) {
        this._databaseName = value;
    }
    public resetDatabaseName() {
        this._databaseName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseNameInput() {
        return this._databaseName;
    }

    // secret_id - computed: true, optional: true, required: false
    private _secretId?: string; 
    public get secretId() {
        return this.getStringAttribute('secret_id');
    }
    public set secretId(value: string) {
        this._secretId = value;
    }
    public resetSecretId() {
        this._secretId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretIdInput() {
        return this._secretId;
    }
}

export class CredentialPropertyList extends cdktn.ComplexList {
    public internalValue? : CredentialProperty[] | cdktn.IResolvable

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
    public get(index: number): CredentialPropertyOutputReference {
        return new CredentialPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#key CcApplication#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/systemsmanagersap_application#value CcApplication#value}
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
