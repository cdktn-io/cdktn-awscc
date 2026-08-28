// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/identitystore_group_membership

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcGroupMembershipProps extends cdktn.TerraformMetaArguments {
    /**
    * The unique identifier for a group in the identity store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/identitystore_group_membership#group_id CcGroupMembership#group_id}
    */
    readonly groupId: string;
    /**
    * The globally unique identifier for the identity store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/identitystore_group_membership#identity_store_id CcGroupMembership#identity_store_id}
    */
    readonly identityStoreId: string;
    /**
    * An object containing the identifier of a group member.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/identitystore_group_membership#member_id CcGroupMembership#member_id}
    */
    readonly memberId: CcGroupMembership.MemberIdProperty;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/identitystore_group_membership awscc_identitystore_group_membership}
*/
export class CcGroupMembership extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_identitystore_group_membership";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcGroupMembership resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcGroupMembership to import
    * @param importFromId The id of the existing CcGroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/identitystore_group_membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcGroupMembership to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_identitystore_group_membership", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/identitystore_group_membership awscc_identitystore_group_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcGroupMembershipProps
    */
    public constructor(scope: Construct, id: string, config: CcGroupMembershipProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_identitystore_group_membership',
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
        this._groupId = config.groupId;
        this._identityStoreId = config.identityStoreId;
        this._memberId.internalValue = config.memberId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // group_id - computed: false, optional: false, required: true
    private _groupId?: string; 
    public get groupId() {
        return this.getStringAttribute('group_id');
    }
    public set groupId(value: string) {
        this._groupId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdInput() {
        return this._groupId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identity_store_id - computed: false, optional: false, required: true
    private _identityStoreId?: string; 
    public get identityStoreId() {
        return this.getStringAttribute('identity_store_id');
    }
    public set identityStoreId(value: string) {
        this._identityStoreId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get identityStoreIdInput() {
        return this._identityStoreId;
    }

    // member_id - computed: false, optional: false, required: true
    private _memberId = new CcGroupMembership.MemberIdPropertyOutputReference(this, "member_id");
    public get memberId() {
        return this._memberId;
    }
    public putMemberId(value: CcGroupMembership.MemberIdProperty) {
        this._memberId.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get memberIdInput() {
        return this._memberId.internalValue;
    }

    // membership_id - computed: true, optional: false, required: false
    public get membershipId() {
        return this.getStringAttribute('membership_id');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            group_id: cdktn.stringToTerraform(this._groupId),
            identity_store_id: cdktn.stringToTerraform(this._identityStoreId),
            member_id: ccGroupMembershipMemberIdPropertyToTerraform(this._memberId.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            group_id: {
                value: cdktn.stringToHclTerraform(this._groupId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            identity_store_id: {
                value: cdktn.stringToHclTerraform(this._identityStoreId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            member_id: {
                value: ccGroupMembershipMemberIdPropertyToHclTerraform(this._memberId.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcGroupMembership.MemberIdProperty",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccGroupMembershipMemberIdPropertyToTerraform(struct?: CcGroupMembership.MemberIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        user_id: cdktn.stringToTerraform(struct!.userId),
    }
}


export function ccGroupMembershipMemberIdPropertyToHclTerraform(struct?: CcGroupMembership.MemberIdProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        user_id: {
            value: cdktn.stringToHclTerraform(struct!.userId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcGroupMembership {
export interface MemberIdProperty {
    /**
    * The identifier for a user in the identity store.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/identitystore_group_membership#user_id CcGroupMembership#user_id}
    */
    readonly userId: string;
}
export class MemberIdPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemberIdProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._userId !== undefined) {
            hasAnyValues = true;
            internalValueResult.userId = this._userId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemberIdProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._userId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._userId = value.userId;
        }
    }

    // user_id - computed: false, optional: false, required: true
    private _userId?: string; 
    public get userId() {
        return this.getStringAttribute('user_id');
    }
    public set userId(value: string) {
        this._userId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdInput() {
        return this._userId;
    }
}
}
