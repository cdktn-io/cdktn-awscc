// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcTemplateGroupAccessControlEntryProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights CcTemplateGroupAccessControlEntry#access_rights}
    */
    readonly accessRights: CcTemplateGroupAccessControlEntry.AccessRightsProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name CcTemplateGroupAccessControlEntry#group_display_name}
    */
    readonly groupDisplayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier CcTemplateGroupAccessControlEntry#group_security_identifier}
    */
    readonly groupSecurityIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn CcTemplateGroupAccessControlEntry#template_arn}
    */
    readonly templateArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry}
*/
export class CcTemplateGroupAccessControlEntry extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_pcaconnectorad_template_group_access_control_entry";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcTemplateGroupAccessControlEntry to import
    * @param importFromId The id of the existing CcTemplateGroupAccessControlEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcTemplateGroupAccessControlEntry to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_pcaconnectorad_template_group_access_control_entry", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcTemplateGroupAccessControlEntryProps
    */
    public constructor(scope: Construct, id: string, config: CcTemplateGroupAccessControlEntryProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_pcaconnectorad_template_group_access_control_entry',
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
        this._accessRights.internalValue = config.accessRights;
        this._groupDisplayName = config.groupDisplayName;
        this._groupSecurityIdentifier = config.groupSecurityIdentifier;
        this._templateArn = config.templateArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // access_rights - computed: false, optional: false, required: true
    private _accessRights = new CcTemplateGroupAccessControlEntry.AccessRightsPropertyOutputReference(this, "access_rights");
    public get accessRights() {
        return this._accessRights;
    }
    public putAccessRights(value: CcTemplateGroupAccessControlEntry.AccessRightsProperty) {
        this._accessRights.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get accessRightsInput() {
        return this._accessRights.internalValue;
    }

    // group_display_name - computed: false, optional: false, required: true
    private _groupDisplayName?: string; 
    public get groupDisplayName() {
        return this.getStringAttribute('group_display_name');
    }
    public set groupDisplayName(value: string) {
        this._groupDisplayName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupDisplayNameInput() {
        return this._groupDisplayName;
    }

    // group_security_identifier - computed: false, optional: false, required: true
    private _groupSecurityIdentifier?: string; 
    public get groupSecurityIdentifier() {
        return this.getStringAttribute('group_security_identifier');
    }
    public set groupSecurityIdentifier(value: string) {
        this._groupSecurityIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupSecurityIdentifierInput() {
        return this._groupSecurityIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // template_arn - computed: false, optional: false, required: true
    private _templateArn?: string; 
    public get templateArn() {
        return this.getStringAttribute('template_arn');
    }
    public set templateArn(value: string) {
        this._templateArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get templateArnInput() {
        return this._templateArn;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            access_rights: ccTemplateGroupAccessControlEntryAccessRightsPropertyToTerraform(this._accessRights.internalValue),
            group_display_name: cdktn.stringToTerraform(this._groupDisplayName),
            group_security_identifier: cdktn.stringToTerraform(this._groupSecurityIdentifier),
            template_arn: cdktn.stringToTerraform(this._templateArn),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            access_rights: {
                value: ccTemplateGroupAccessControlEntryAccessRightsPropertyToHclTerraform(this._accessRights.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcTemplateGroupAccessControlEntry.AccessRightsProperty",
            },
            group_display_name: {
                value: cdktn.stringToHclTerraform(this._groupDisplayName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_security_identifier: {
                value: cdktn.stringToHclTerraform(this._groupSecurityIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_arn: {
                value: cdktn.stringToHclTerraform(this._templateArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccTemplateGroupAccessControlEntryAccessRightsPropertyToTerraform(struct?: CcTemplateGroupAccessControlEntry.AccessRightsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        auto_enroll: cdktn.stringToTerraform(struct!.autoEnroll),
        enroll: cdktn.stringToTerraform(struct!.enroll),
    }
}


export function ccTemplateGroupAccessControlEntryAccessRightsPropertyToHclTerraform(struct?: CcTemplateGroupAccessControlEntry.AccessRightsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        auto_enroll: {
            value: cdktn.stringToHclTerraform(struct!.autoEnroll),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        enroll: {
            value: cdktn.stringToHclTerraform(struct!.enroll),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcTemplateGroupAccessControlEntry {
export interface AccessRightsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll CcTemplateGroupAccessControlEntry#auto_enroll}
    */
    readonly autoEnroll?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll CcTemplateGroupAccessControlEntry#enroll}
    */
    readonly enroll?: string;
}
export class AccessRightsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AccessRightsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._autoEnroll !== undefined) {
            hasAnyValues = true;
            internalValueResult.autoEnroll = this._autoEnroll;
        }
        if (this._enroll !== undefined) {
            hasAnyValues = true;
            internalValueResult.enroll = this._enroll;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AccessRightsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._autoEnroll = undefined;
            this._enroll = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._autoEnroll = value.autoEnroll;
            this._enroll = value.enroll;
        }
    }

    // auto_enroll - computed: true, optional: true, required: false
    private _autoEnroll?: string; 
    public get autoEnroll() {
        return this.getStringAttribute('auto_enroll');
    }
    public set autoEnroll(value: string) {
        this._autoEnroll = value;
    }
    public resetAutoEnroll() {
        this._autoEnroll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get autoEnrollInput() {
        return this._autoEnroll;
    }

    // enroll - computed: true, optional: true, required: false
    private _enroll?: string; 
    public get enroll() {
        return this.getStringAttribute('enroll');
    }
    public set enroll(value: string) {
        this._enroll = value;
    }
    public resetEnroll() {
        this._enroll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enrollInput() {
        return this._enroll;
    }
}
}
