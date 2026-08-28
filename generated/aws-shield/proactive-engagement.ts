// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_proactive_engagement

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProactiveEngagementProps extends cdktn.TerraformMetaArguments {
    /**
    * A list of email addresses and phone numbers that the Shield Response Team (SRT) can use to contact you for escalations to the SRT and to initiate proactive customer support.
    * To enable proactive engagement, the contact list must include at least one phone number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_proactive_engagement#emergency_contact_list CcProactiveEngagement#emergency_contact_list}
    */
    readonly emergencyContactList: CcProactiveEngagement.EmergencyContactProperty[] | cdktn.IResolvable;
    /**
    * If `ENABLED`, the Shield Response Team (SRT) will use email and phone to notify contacts about escalations to the SRT and to initiate proactive customer support.
    * If `DISABLED`, the SRT will not proactively notify contacts about escalations or to initiate proactive customer support.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_proactive_engagement#proactive_engagement_status CcProactiveEngagement#proactive_engagement_status}
    */
    readonly proactiveEngagementStatus: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_proactive_engagement awscc_shield_proactive_engagement}
*/
export class CcProactiveEngagement extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_shield_proactive_engagement";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProactiveEngagement resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProactiveEngagement to import
    * @param importFromId The id of the existing CcProactiveEngagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_proactive_engagement#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProactiveEngagement to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_shield_proactive_engagement", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_proactive_engagement awscc_shield_proactive_engagement} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProactiveEngagementProps
    */
    public constructor(scope: Construct, id: string, config: CcProactiveEngagementProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_shield_proactive_engagement',
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
        this._emergencyContactList.internalValue = config.emergencyContactList;
        this._proactiveEngagementStatus = config.proactiveEngagementStatus;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // account_id - computed: true, optional: false, required: false
    public get accountId() {
        return this.getStringAttribute('account_id');
    }

    // emergency_contact_list - computed: false, optional: false, required: true
    private _emergencyContactList = new CcProactiveEngagement.EmergencyContactPropertyList(this, "emergency_contact_list", false);
    public get emergencyContactList() {
        return this._emergencyContactList;
    }
    public putEmergencyContactList(value: CcProactiveEngagement.EmergencyContactProperty[] | cdktn.IResolvable) {
        this._emergencyContactList.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emergencyContactListInput() {
        return this._emergencyContactList.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // proactive_engagement_status - computed: false, optional: false, required: true
    private _proactiveEngagementStatus?: string; 
    public get proactiveEngagementStatus() {
        return this.getStringAttribute('proactive_engagement_status');
    }
    public set proactiveEngagementStatus(value: string) {
        this._proactiveEngagementStatus = value;
    }
    // Temporarily expose input value. Use with caution.
    public get proactiveEngagementStatusInput() {
        return this._proactiveEngagementStatus;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            emergency_contact_list: cdktn.listMapper(ccProactiveEngagementEmergencyContactPropertyToTerraform, false)(this._emergencyContactList.internalValue),
            proactive_engagement_status: cdktn.stringToTerraform(this._proactiveEngagementStatus),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            emergency_contact_list: {
                value: cdktn.listMapperHcl(ccProactiveEngagementEmergencyContactPropertyToHclTerraform, false)(this._emergencyContactList.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcProactiveEngagement.EmergencyContactPropertyList",
            },
            proactive_engagement_status: {
                value: cdktn.stringToHclTerraform(this._proactiveEngagementStatus),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProactiveEngagementEmergencyContactPropertyToTerraform(struct?: CcProactiveEngagement.EmergencyContactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        contact_notes: cdktn.stringToTerraform(struct!.contactNotes),
        email_address: cdktn.stringToTerraform(struct!.emailAddress),
        phone_number: cdktn.stringToTerraform(struct!.phoneNumber),
    }
}


export function ccProactiveEngagementEmergencyContactPropertyToHclTerraform(struct?: CcProactiveEngagement.EmergencyContactProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        contact_notes: {
            value: cdktn.stringToHclTerraform(struct!.contactNotes),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        email_address: {
            value: cdktn.stringToHclTerraform(struct!.emailAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        phone_number: {
            value: cdktn.stringToHclTerraform(struct!.phoneNumber),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcProactiveEngagement {
export interface EmergencyContactProperty {
    /**
    * Additional notes regarding the contact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_proactive_engagement#contact_notes CcProactiveEngagement#contact_notes}
    */
    readonly contactNotes?: string;
    /**
    * The email address for the contact.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_proactive_engagement#email_address CcProactiveEngagement#email_address}
    */
    readonly emailAddress: string;
    /**
    * The phone number for the contact
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/shield_proactive_engagement#phone_number CcProactiveEngagement#phone_number}
    */
    readonly phoneNumber?: string;
}
export class EmergencyContactPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EmergencyContactProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._contactNotes !== undefined) {
            hasAnyValues = true;
            internalValueResult.contactNotes = this._contactNotes;
        }
        if (this._emailAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.emailAddress = this._emailAddress;
        }
        if (this._phoneNumber !== undefined) {
            hasAnyValues = true;
            internalValueResult.phoneNumber = this._phoneNumber;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EmergencyContactProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._contactNotes = undefined;
            this._emailAddress = undefined;
            this._phoneNumber = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._contactNotes = value.contactNotes;
            this._emailAddress = value.emailAddress;
            this._phoneNumber = value.phoneNumber;
        }
    }

    // contact_notes - computed: true, optional: true, required: false
    private _contactNotes?: string; 
    public get contactNotes() {
        return this.getStringAttribute('contact_notes');
    }
    public set contactNotes(value: string) {
        this._contactNotes = value;
    }
    public resetContactNotes() {
        this._contactNotes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactNotesInput() {
        return this._contactNotes;
    }

    // email_address - computed: false, optional: false, required: true
    private _emailAddress?: string; 
    public get emailAddress() {
        return this.getStringAttribute('email_address');
    }
    public set emailAddress(value: string) {
        this._emailAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get emailAddressInput() {
        return this._emailAddress;
    }

    // phone_number - computed: true, optional: true, required: false
    private _phoneNumber?: string; 
    public get phoneNumber() {
        return this.getStringAttribute('phone_number');
    }
    public set phoneNumber(value: string) {
        this._phoneNumber = value;
    }
    public resetPhoneNumber() {
        this._phoneNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get phoneNumberInput() {
        return this._phoneNumber;
    }
}

export class EmergencyContactPropertyList extends cdktn.ComplexList {
    public internalValue? : EmergencyContactProperty[] | cdktn.IResolvable

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
    public get(index: number): EmergencyContactPropertyOutputReference {
        return new EmergencyContactPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
