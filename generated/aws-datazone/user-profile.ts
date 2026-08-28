// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_user_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcUserProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * The identifier of the Amazon DataZone domain in which the user profile would be created.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_user_profile#domain_identifier CcUserProfile#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * The session name of the user profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_user_profile#session_name CcUserProfile#session_name}
    */
    readonly sessionName?: string;
    /**
    * The status of the user profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_user_profile#status CcUserProfile#status}
    */
    readonly status?: string;
    /**
    * The ID of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_user_profile#user_identifier CcUserProfile#user_identifier}
    */
    readonly userIdentifier: string;
    /**
    * The type of the user.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_user_profile#user_type CcUserProfile#user_type}
    */
    readonly userType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_user_profile awscc_datazone_user_profile}
*/
export class CcUserProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_user_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcUserProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcUserProfile to import
    * @param importFromId The id of the existing CcUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_user_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcUserProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_user_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_user_profile awscc_datazone_user_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcUserProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcUserProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_user_profile',
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
        this._domainIdentifier = config.domainIdentifier;
        this._sessionName = config.sessionName;
        this._status = config.status;
        this._userIdentifier = config.userIdentifier;
        this._userType = config.userType;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // details - computed: true, optional: false, required: false
    private _details = new CcUserProfile.DetailsPropertyOutputReference(this, "details");
    public get details() {
        return this._details;
    }

    // domain_id - computed: true, optional: false, required: false
    public get domainId() {
        return this.getStringAttribute('domain_id');
    }

    // domain_identifier - computed: false, optional: false, required: true
    private _domainIdentifier?: string; 
    public get domainIdentifier() {
        return this.getStringAttribute('domain_identifier');
    }
    public set domainIdentifier(value: string) {
        this._domainIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainIdentifierInput() {
        return this._domainIdentifier;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // session_name - computed: true, optional: true, required: false
    private _sessionName?: string; 
    public get sessionName() {
        return this.getStringAttribute('session_name');
    }
    public set sessionName(value: string) {
        this._sessionName = value;
    }
    public resetSessionName() {
        this._sessionName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sessionNameInput() {
        return this._sessionName;
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

    // type - computed: true, optional: false, required: false
    public get type() {
        return this.getStringAttribute('type');
    }

    // user_identifier - computed: false, optional: false, required: true
    private _userIdentifier?: string; 
    public get userIdentifier() {
        return this.getStringAttribute('user_identifier');
    }
    public set userIdentifier(value: string) {
        this._userIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdentifierInput() {
        return this._userIdentifier;
    }

    // user_profile_id - computed: true, optional: false, required: false
    public get userProfileId() {
        return this.getStringAttribute('user_profile_id');
    }

    // user_type - computed: true, optional: true, required: false
    private _userType?: string; 
    public get userType() {
        return this.getStringAttribute('user_type');
    }
    public set userType(value: string) {
        this._userType = value;
    }
    public resetUserType() {
        this._userType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userTypeInput() {
        return this._userType;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            session_name: cdktn.stringToTerraform(this._sessionName),
            status: cdktn.stringToTerraform(this._status),
            user_identifier: cdktn.stringToTerraform(this._userIdentifier),
            user_type: cdktn.stringToTerraform(this._userType),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            session_name: {
                value: cdktn.stringToHclTerraform(this._sessionName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            status: {
                value: cdktn.stringToHclTerraform(this._status),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_identifier: {
                value: cdktn.stringToHclTerraform(this._userIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            user_type: {
                value: cdktn.stringToHclTerraform(this._userType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccUserProfileIamPropertyToTerraform(struct?: CcUserProfile.IamProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccUserProfileIamPropertyToHclTerraform(struct?: CcUserProfile.IamProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccUserProfileSsoPropertyToTerraform(struct?: CcUserProfile.SsoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccUserProfileSsoPropertyToHclTerraform(struct?: CcUserProfile.SsoProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export function ccUserProfileDetailsPropertyToTerraform(struct?: CcUserProfile.DetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
    }
}


export function ccUserProfileDetailsPropertyToHclTerraform(struct?: CcUserProfile.DetailsProperty): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
    };
    return attrs;
}


export namespace CcUserProfile {
export interface IamProperty {
}
export class IamPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): IamProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: IamProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // group_profile_id - computed: true, optional: false, required: false
    public get groupProfileId() {
        return this.getStringAttribute('group_profile_id');
    }

    // session_name - computed: true, optional: false, required: false
    public get sessionName() {
        return this.getStringAttribute('session_name');
    }
}
export interface SsoProperty {
}
export class SsoPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): SsoProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: SsoProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // first_name - computed: true, optional: false, required: false
    public get firstName() {
        return this.getStringAttribute('first_name');
    }

    // last_name - computed: true, optional: false, required: false
    public get lastName() {
        return this.getStringAttribute('last_name');
    }

    // username - computed: true, optional: false, required: false
    public get username() {
        return this.getStringAttribute('username');
    }
}
export interface DetailsProperty {
}
export class DetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): DetailsProperty | undefined {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: DetailsProperty | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }

    // iam - computed: true, optional: false, required: false
    private _iam = new IamPropertyOutputReference(this, "iam");
    public get iam() {
        return this._iam;
    }

    // sso - computed: true, optional: false, required: false
    private _sso = new SsoPropertyOutputReference(this, "sso");
    public get sso() {
        return this._sso;
    }
}
}
