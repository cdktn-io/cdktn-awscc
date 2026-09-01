// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgentSpaceProps extends cdktn.TerraformMetaArguments {
    /**
    * The description of the AgentSpace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#description CcAgentSpace#description}
    */
    readonly description?: string;
    /**
    * The ARN of the KMS key to use for encryption.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#kms_key_arn CcAgentSpace#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * The locale for the AgentSpace, which determines the language used in agent responses.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#locale CcAgentSpace#locale}
    */
    readonly locale?: string;
    /**
    * The name of the AgentSpace.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#name CcAgentSpace#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#operator_app CcAgentSpace#operator_app}
    */
    readonly operatorApp?: CcAgentSpace.OperatorAppProperty;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#tags CcAgentSpace#tags}
    */
    readonly tags?: CcAgentSpace.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space awscc_devopsagent_agent_space}
*/
export class CcAgentSpace extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_devopsagent_agent_space";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgentSpace resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgentSpace to import
    * @param importFromId The id of the existing CcAgentSpace that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgentSpace to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_devopsagent_agent_space", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space awscc_devopsagent_agent_space} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgentSpaceProps
    */
    public constructor(scope: Construct, id: string, config: CcAgentSpaceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_devopsagent_agent_space',
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
        this._description = config.description;
        this._kmsKeyArn = config.kmsKeyArn;
        this._locale = config.locale;
        this._name = config.name;
        this._operatorApp.internalValue = config.operatorApp;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // agent_space_id - computed: true, optional: false, required: false
    public get agentSpaceId() {
        return this.getStringAttribute('agent_space_id');
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
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

    // kms_key_arn - computed: true, optional: true, required: false
    private _kmsKeyArn?: string; 
    public get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    public set kmsKeyArn(value: string) {
        this._kmsKeyArn = value;
    }
    public resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }

    // locale - computed: true, optional: true, required: false
    private _locale?: string; 
    public get locale() {
        return this.getStringAttribute('locale');
    }
    public set locale(value: string) {
        this._locale = value;
    }
    public resetLocale() {
        this._locale = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get localeInput() {
        return this._locale;
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

    // operator_app - computed: true, optional: true, required: false
    private _operatorApp = new CcAgentSpace.OperatorAppPropertyOutputReference(this, "operator_app");
    public get operatorApp() {
        return this._operatorApp;
    }
    public putOperatorApp(value: CcAgentSpace.OperatorAppProperty) {
        this._operatorApp.internalValue = value;
    }
    public resetOperatorApp() {
        this._operatorApp.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorAppInput() {
        return this._operatorApp.internalValue;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAgentSpace.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAgentSpace.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
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
            description: cdktn.stringToTerraform(this._description),
            kms_key_arn: cdktn.stringToTerraform(this._kmsKeyArn),
            locale: cdktn.stringToTerraform(this._locale),
            name: cdktn.stringToTerraform(this._name),
            operator_app: ccAgentSpaceOperatorAppPropertyToTerraform(this._operatorApp.internalValue),
            tags: cdktn.listMapper(ccAgentSpaceTagPropertyToTerraform, false)(this._tags.internalValue),
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
            kms_key_arn: {
                value: cdktn.stringToHclTerraform(this._kmsKeyArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            locale: {
                value: cdktn.stringToHclTerraform(this._locale),
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
            operator_app: {
                value: ccAgentSpaceOperatorAppPropertyToHclTerraform(this._operatorApp.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcAgentSpace.OperatorAppProperty",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAgentSpaceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAgentSpace.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAgentSpaceIamAuthConfigurationPropertyToTerraform(struct?: CcAgentSpace.IamAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        operator_app_role_arn: cdktn.stringToTerraform(struct!.operatorAppRoleArn),
    }
}


export function ccAgentSpaceIamAuthConfigurationPropertyToHclTerraform(struct?: CcAgentSpace.IamAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        operator_app_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.operatorAppRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceIdcAuthConfigurationPropertyToTerraform(struct?: CcAgentSpace.IdcAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        idc_instance_arn: cdktn.stringToTerraform(struct!.idcInstanceArn),
        operator_app_role_arn: cdktn.stringToTerraform(struct!.operatorAppRoleArn),
    }
}


export function ccAgentSpaceIdcAuthConfigurationPropertyToHclTerraform(struct?: CcAgentSpace.IdcAuthConfigurationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        idc_instance_arn: {
            value: cdktn.stringToHclTerraform(struct!.idcInstanceArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        operator_app_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.operatorAppRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceOperatorAppPropertyToTerraform(struct?: CcAgentSpace.OperatorAppProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        iam: ccAgentSpaceIamAuthConfigurationPropertyToTerraform(struct!.iam),
        idc: ccAgentSpaceIdcAuthConfigurationPropertyToTerraform(struct!.idc),
    }
}


export function ccAgentSpaceOperatorAppPropertyToHclTerraform(struct?: CcAgentSpace.OperatorAppProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        iam: {
            value: ccAgentSpaceIamAuthConfigurationPropertyToHclTerraform(struct!.iam),
            isBlock: true,
            type: "struct",
            storageClassType: "IamAuthConfigurationProperty",
        },
        idc: {
            value: ccAgentSpaceIdcAuthConfigurationPropertyToHclTerraform(struct!.idc),
            isBlock: true,
            type: "struct",
            storageClassType: "IdcAuthConfigurationProperty",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccAgentSpaceTagPropertyToTerraform(struct?: CcAgentSpace.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAgentSpaceTagPropertyToHclTerraform(struct?: CcAgentSpace.TagProperty | cdktn.IResolvable): any {
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


export namespace CcAgentSpace {
export interface IamAuthConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#operator_app_role_arn CcAgentSpace#operator_app_role_arn}
    */
    readonly operatorAppRoleArn?: string;
}
export class IamAuthConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamAuthConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._operatorAppRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.operatorAppRoleArn = this._operatorAppRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamAuthConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._operatorAppRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._operatorAppRoleArn = value.operatorAppRoleArn;
        }
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // operator_app_role_arn - computed: true, optional: true, required: false
    private _operatorAppRoleArn?: string; 
    public get operatorAppRoleArn() {
        return this.getStringAttribute('operator_app_role_arn');
    }
    public set operatorAppRoleArn(value: string) {
        this._operatorAppRoleArn = value;
    }
    public resetOperatorAppRoleArn() {
        this._operatorAppRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorAppRoleArnInput() {
        return this._operatorAppRoleArn;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
}
export interface IdcAuthConfigurationProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#idc_instance_arn CcAgentSpace#idc_instance_arn}
    */
    readonly idcInstanceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#operator_app_role_arn CcAgentSpace#operator_app_role_arn}
    */
    readonly operatorAppRoleArn?: string;
}
export class IdcAuthConfigurationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IdcAuthConfigurationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._idcInstanceArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.idcInstanceArn = this._idcInstanceArn;
        }
        if (this._operatorAppRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.operatorAppRoleArn = this._operatorAppRoleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IdcAuthConfigurationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._idcInstanceArn = undefined;
            this._operatorAppRoleArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._idcInstanceArn = value.idcInstanceArn;
            this._operatorAppRoleArn = value.operatorAppRoleArn;
        }
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // idc_application_arn - computed: true, optional: false, required: false
    public get idcApplicationArn() {
        return this.getStringAttribute('idc_application_arn');
    }

    // idc_instance_arn - computed: true, optional: true, required: false
    private _idcInstanceArn?: string; 
    public get idcInstanceArn() {
        return this.getStringAttribute('idc_instance_arn');
    }
    public set idcInstanceArn(value: string) {
        this._idcInstanceArn = value;
    }
    public resetIdcInstanceArn() {
        this._idcInstanceArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idcInstanceArnInput() {
        return this._idcInstanceArn;
    }

    // operator_app_role_arn - computed: true, optional: true, required: false
    private _operatorAppRoleArn?: string; 
    public get operatorAppRoleArn() {
        return this.getStringAttribute('operator_app_role_arn');
    }
    public set operatorAppRoleArn(value: string) {
        this._operatorAppRoleArn = value;
    }
    public resetOperatorAppRoleArn() {
        this._operatorAppRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operatorAppRoleArnInput() {
        return this._operatorAppRoleArn;
    }

    // updated_at - computed: true, optional: false, required: false
    public get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
}
export interface OperatorAppProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#iam CcAgentSpace#iam}
    */
    readonly iam?: IamAuthConfigurationProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#idc CcAgentSpace#idc}
    */
    readonly idc?: IdcAuthConfigurationProperty;
}
export class OperatorAppPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): OperatorAppProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._iam?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.iam = this._iam?.internalValue;
        }
        if (this._idc?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.idc = this._idc?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: OperatorAppProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._iam.internalValue = undefined;
            this._idc.internalValue = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._iam.internalValue = value.iam;
            this._idc.internalValue = value.idc;
        }
    }

    // iam - computed: true, optional: true, required: false
    private _iam = new IamAuthConfigurationPropertyOutputReference(this, "iam");
    public get iam() {
        return this._iam;
    }
    public putIam(value: IamAuthConfigurationProperty) {
        this._iam.internalValue = value;
    }
    public resetIam() {
        this._iam.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get iamInput() {
        return this._iam.internalValue;
    }

    // idc - computed: true, optional: true, required: false
    private _idc = new IdcAuthConfigurationPropertyOutputReference(this, "idc");
    public get idc() {
        return this._idc;
    }
    public putIdc(value: IdcAuthConfigurationProperty) {
        this._idc.internalValue = value;
    }
    public resetIdc() {
        this._idc.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idcInput() {
        return this._idc.internalValue;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#key CcAgentSpace#key}
    */
    readonly key?: string;
    /**
    * The value for the tag.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/devopsagent_agent_space#value CcAgentSpace#value}
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
