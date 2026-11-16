// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcAgentOrganizationalProfileProps extends cdktn.TerraformMetaArguments {
    /**
    * A business overview for the organizational profile used to improve recommendation quality.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#business_overview CcAgentOrganizationalProfile#business_overview}
    */
    readonly businessOverview?: string;
    /**
    * Whether deletion protection is enabled for the organizational profile. When enabled, the profile cannot be deleted until deletion protection is disabled.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#deletion_protection CcAgentOrganizationalProfile#deletion_protection}
    */
    readonly deletionProtection?: boolean | cdktn.IResolvable;
    /**
    * A description of the organizational profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#description CcAgentOrganizationalProfile#description}
    */
    readonly description?: string;
    /**
    * The human-readable display name of the organizational profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#display_name CcAgentOrganizationalProfile#display_name}
    */
    readonly displayName?: string;
    /**
    * The name of the organizational profile. Unique within the account and used as the last component of the ARN.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#name CcAgentOrganizationalProfile#name}
    */
    readonly name: string;
    /**
    * The list of Well-Architected pillars to focus on.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#pillars CcAgentOrganizationalProfile#pillars}
    */
    readonly pillars: string[];
    /**
    * Key-value pairs to associate with the Agent Organizational Profile.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#tags CcAgentOrganizationalProfile#tags}
    */
    readonly tags?: CcAgentOrganizationalProfile.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile awscc_wellarchitected_agent_organizational_profile}
*/
export class CcAgentOrganizationalProfile extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_wellarchitected_agent_organizational_profile";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcAgentOrganizationalProfile resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcAgentOrganizationalProfile to import
    * @param importFromId The id of the existing CcAgentOrganizationalProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcAgentOrganizationalProfile to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_wellarchitected_agent_organizational_profile", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile awscc_wellarchitected_agent_organizational_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcAgentOrganizationalProfileProps
    */
    public constructor(scope: Construct, id: string, config: CcAgentOrganizationalProfileProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_wellarchitected_agent_organizational_profile',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.110.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._businessOverview = config.businessOverview;
        this._deletionProtection = config.deletionProtection;
        this._description = config.description;
        this._displayName = config.displayName;
        this._name = config.name;
        this._pillars = config.pillars;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // business_overview - computed: true, optional: true, required: false
    private _businessOverview?: string; 
    public get businessOverview() {
        return this.getStringAttribute('business_overview');
    }
    public set businessOverview(value: string) {
        this._businessOverview = value;
    }
    public resetBusinessOverview() {
        this._businessOverview = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get businessOverviewInput() {
        return this._businessOverview;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }

    // deletion_protection - computed: true, optional: true, required: false
    private _deletionProtection?: boolean | cdktn.IResolvable; 
    public get deletionProtection() {
        return this.getBooleanAttribute('deletion_protection');
    }
    public set deletionProtection(value: boolean | cdktn.IResolvable) {
        this._deletionProtection = value;
    }
    public resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deletionProtectionInput() {
        return this._deletionProtection;
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

    // display_name - computed: true, optional: true, required: false
    private _displayName?: string; 
    public get displayName() {
        return this.getStringAttribute('display_name');
    }
    public set displayName(value: string) {
        this._displayName = value;
    }
    public resetDisplayName() {
        this._displayName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get displayNameInput() {
        return this._displayName;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_modified_at - computed: true, optional: false, required: false
    public get lastModifiedAt() {
        return this.getStringAttribute('last_modified_at');
    }

    // last_modified_by - computed: true, optional: false, required: false
    public get lastModifiedBy() {
        return this.getStringAttribute('last_modified_by');
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

    // pillars - computed: false, optional: false, required: true
    private _pillars?: string[]; 
    public get pillars() {
        return cdktn.Fn.tolist(this.getListAttribute('pillars'));
    }
    public set pillars(value: string[]) {
        this._pillars = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pillarsInput() {
        return this._pillars;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcAgentOrganizationalProfile.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcAgentOrganizationalProfile.TagsProperty[] | cdktn.IResolvable) {
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
            business_overview: cdktn.stringToTerraform(this._businessOverview),
            deletion_protection: cdktn.booleanToTerraform(this._deletionProtection),
            description: cdktn.stringToTerraform(this._description),
            display_name: cdktn.stringToTerraform(this._displayName),
            name: cdktn.stringToTerraform(this._name),
            pillars: cdktn.listMapper(cdktn.stringToTerraform, false)(this._pillars),
            tags: cdktn.listMapper(ccAgentOrganizationalProfileTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            business_overview: {
                value: cdktn.stringToHclTerraform(this._businessOverview),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deletion_protection: {
                value: cdktn.booleanToHclTerraform(this._deletionProtection),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            display_name: {
                value: cdktn.stringToHclTerraform(this._displayName),
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
            pillars: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._pillars),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccAgentOrganizationalProfileTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcAgentOrganizationalProfile.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccAgentOrganizationalProfileTagsPropertyToTerraform(struct?: CcAgentOrganizationalProfile.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccAgentOrganizationalProfileTagsPropertyToHclTerraform(struct?: CcAgentOrganizationalProfile.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcAgentOrganizationalProfile {
export interface TagsProperty {
    /**
    * The tag key.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#key CcAgentOrganizationalProfile#key}
    */
    readonly key?: string;
    /**
    * The tag value.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/wellarchitected_agent_organizational_profile#value CcAgentOrganizationalProfile#value}
    */
    readonly value?: string;
}
export class TagsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsProperty | cdktn.IResolvable | undefined) {
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

export class TagsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsPropertyOutputReference {
        return new TagsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
