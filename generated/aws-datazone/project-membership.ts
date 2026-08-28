// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_project_membership

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcProjectMembershipProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_project_membership#designation CcProjectMembership#designation}
    */
    readonly designation: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_project_membership#domain_identifier CcProjectMembership#domain_identifier}
    */
    readonly domainIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_project_membership#member CcProjectMembership#member}
    */
    readonly member: CcProjectMembership.MemberProperty;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_project_membership#project_identifier CcProjectMembership#project_identifier}
    */
    readonly projectIdentifier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_project_membership awscc_datazone_project_membership}
*/
export class CcProjectMembership extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_datazone_project_membership";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcProjectMembership resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcProjectMembership to import
    * @param importFromId The id of the existing CcProjectMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_project_membership#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcProjectMembership to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_datazone_project_membership", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_project_membership awscc_datazone_project_membership} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcProjectMembershipProps
    */
    public constructor(scope: Construct, id: string, config: CcProjectMembershipProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_datazone_project_membership',
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
        this._designation = config.designation;
        this._domainIdentifier = config.domainIdentifier;
        this._member.internalValue = config.member;
        this._projectIdentifier = config.projectIdentifier;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // designation - computed: false, optional: false, required: true
    private _designation?: string; 
    public get designation() {
        return this.getStringAttribute('designation');
    }
    public set designation(value: string) {
        this._designation = value;
    }
    // Temporarily expose input value. Use with caution.
    public get designationInput() {
        return this._designation;
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

    // member - computed: false, optional: false, required: true
    private _member = new CcProjectMembership.MemberPropertyOutputReference(this, "member");
    public get member() {
        return this._member;
    }
    public putMember(value: CcProjectMembership.MemberProperty) {
        this._member.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get memberInput() {
        return this._member.internalValue;
    }

    // member_identifier - computed: true, optional: false, required: false
    public get memberIdentifier() {
        return this.getStringAttribute('member_identifier');
    }

    // member_identifier_type - computed: true, optional: false, required: false
    public get memberIdentifierType() {
        return this.getStringAttribute('member_identifier_type');
    }

    // project_identifier - computed: false, optional: false, required: true
    private _projectIdentifier?: string; 
    public get projectIdentifier() {
        return this.getStringAttribute('project_identifier');
    }
    public set projectIdentifier(value: string) {
        this._projectIdentifier = value;
    }
    // Temporarily expose input value. Use with caution.
    public get projectIdentifierInput() {
        return this._projectIdentifier;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            designation: cdktn.stringToTerraform(this._designation),
            domain_identifier: cdktn.stringToTerraform(this._domainIdentifier),
            member: ccProjectMembershipMemberPropertyToTerraform(this._member.internalValue),
            project_identifier: cdktn.stringToTerraform(this._projectIdentifier),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            designation: {
                value: cdktn.stringToHclTerraform(this._designation),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            domain_identifier: {
                value: cdktn.stringToHclTerraform(this._domainIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            member: {
                value: ccProjectMembershipMemberPropertyToHclTerraform(this._member.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcProjectMembership.MemberProperty",
            },
            project_identifier: {
                value: cdktn.stringToHclTerraform(this._projectIdentifier),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccProjectMembershipMemberPropertyToTerraform(struct?: CcProjectMembership.MemberProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        group_identifier: cdktn.stringToTerraform(struct!.groupIdentifier),
        user_identifier: cdktn.stringToTerraform(struct!.userIdentifier),
    }
}


export function ccProjectMembershipMemberPropertyToHclTerraform(struct?: CcProjectMembership.MemberProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        group_identifier: {
            value: cdktn.stringToHclTerraform(struct!.groupIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        user_identifier: {
            value: cdktn.stringToHclTerraform(struct!.userIdentifier),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcProjectMembership {
export interface MemberProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_project_membership#group_identifier CcProjectMembership#group_identifier}
    */
    readonly groupIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/datazone_project_membership#user_identifier CcProjectMembership#user_identifier}
    */
    readonly userIdentifier?: string;
}
export class MemberPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): MemberProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._groupIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.groupIdentifier = this._groupIdentifier;
        }
        if (this._userIdentifier !== undefined) {
            hasAnyValues = true;
            internalValueResult.userIdentifier = this._userIdentifier;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: MemberProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._groupIdentifier = undefined;
            this._userIdentifier = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._groupIdentifier = value.groupIdentifier;
            this._userIdentifier = value.userIdentifier;
        }
    }

    // group_identifier - computed: true, optional: true, required: false
    private _groupIdentifier?: string; 
    public get groupIdentifier() {
        return this.getStringAttribute('group_identifier');
    }
    public set groupIdentifier(value: string) {
        this._groupIdentifier = value;
    }
    public resetGroupIdentifier() {
        this._groupIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupIdentifierInput() {
        return this._groupIdentifier;
    }

    // user_identifier - computed: true, optional: true, required: false
    private _userIdentifier?: string; 
    public get userIdentifier() {
        return this.getStringAttribute('user_identifier');
    }
    public set userIdentifier(value: string) {
        this._userIdentifier = value;
    }
    public resetUserIdentifier() {
        this._userIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get userIdentifierInput() {
        return this._userIdentifier;
    }
}
}
