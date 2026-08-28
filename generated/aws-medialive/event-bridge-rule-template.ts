// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcEventBridgeRuleTemplateProps extends cdktn.TerraformMetaArguments {
    /**
    * A resource's optional description.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template#description CcEventBridgeRuleTemplate#description}
    */
    readonly description?: string;
    /**
    * Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template#event_targets CcEventBridgeRuleTemplate#event_targets}
    */
    readonly eventTargets?: CcEventBridgeRuleTemplate.EventBridgeRuleTemplateTargetProperty[] | cdktn.IResolvable;
    /**
    * The type of event to match with the rule.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template#event_type CcEventBridgeRuleTemplate#event_type}
    */
    readonly eventType: string;
    /**
    * An eventbridge rule template group's identifier. Can be either be its id or current name.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template#group_identifier CcEventBridgeRuleTemplate#group_identifier}
    */
    readonly groupIdentifier?: string;
    /**
    * A resource's name. Names must be unique within the scope of a resource type in a specific region.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template#name CcEventBridgeRuleTemplate#name}
    */
    readonly name: string;
    /**
    * Represents the tags associated with a resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template#tags CcEventBridgeRuleTemplate#tags}
    */
    readonly tags?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template awscc_medialive_event_bridge_rule_template}
*/
export class CcEventBridgeRuleTemplate extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_medialive_event_bridge_rule_template";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcEventBridgeRuleTemplate resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcEventBridgeRuleTemplate to import
    * @param importFromId The id of the existing CcEventBridgeRuleTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcEventBridgeRuleTemplate to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_medialive_event_bridge_rule_template", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template awscc_medialive_event_bridge_rule_template} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcEventBridgeRuleTemplateProps
    */
    public constructor(scope: Construct, id: string, config: CcEventBridgeRuleTemplateProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_medialive_event_bridge_rule_template',
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
        this._description = config.description;
        this._eventTargets.internalValue = config.eventTargets;
        this._eventType = config.eventType;
        this._groupIdentifier = config.groupIdentifier;
        this._name = config.name;
        this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

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

    // event_bridge_rule_template_id - computed: true, optional: false, required: false
    public get eventBridgeRuleTemplateId() {
        return this.getStringAttribute('event_bridge_rule_template_id');
    }

    // event_targets - computed: true, optional: true, required: false
    private _eventTargets = new CcEventBridgeRuleTemplate.EventBridgeRuleTemplateTargetPropertyList(this, "event_targets", false);
    public get eventTargets() {
        return this._eventTargets;
    }
    public putEventTargets(value: CcEventBridgeRuleTemplate.EventBridgeRuleTemplateTargetProperty[] | cdktn.IResolvable) {
        this._eventTargets.internalValue = value;
    }
    public resetEventTargets() {
        this._eventTargets.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTargetsInput() {
        return this._eventTargets.internalValue;
    }

    // event_type - computed: false, optional: false, required: true
    private _eventType?: string; 
    public get eventType() {
        return this.getStringAttribute('event_type');
    }
    public set eventType(value: string) {
        this._eventType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTypeInput() {
        return this._eventType;
    }

    // group_id - computed: true, optional: false, required: false
    public get groupId() {
        return this.getStringAttribute('group_id');
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

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // identifier - computed: true, optional: false, required: false
    public get identifier() {
        return this.getStringAttribute('identifier');
    }

    // modified_at - computed: true, optional: false, required: false
    public get modifiedAt() {
        return this.getStringAttribute('modified_at');
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            description: cdktn.stringToTerraform(this._description),
            event_targets: cdktn.listMapper(ccEventBridgeRuleTemplateEventBridgeRuleTemplateTargetPropertyToTerraform, false)(this._eventTargets.internalValue),
            event_type: cdktn.stringToTerraform(this._eventType),
            group_identifier: cdktn.stringToTerraform(this._groupIdentifier),
            name: cdktn.stringToTerraform(this._name),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
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
            event_targets: {
                value: cdktn.listMapperHcl(ccEventBridgeRuleTemplateEventBridgeRuleTemplateTargetPropertyToHclTerraform, false)(this._eventTargets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcEventBridgeRuleTemplate.EventBridgeRuleTemplateTargetPropertyList",
            },
            event_type: {
                value: cdktn.stringToHclTerraform(this._eventType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            group_identifier: {
                value: cdktn.stringToHclTerraform(this._groupIdentifier),
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
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccEventBridgeRuleTemplateEventBridgeRuleTemplateTargetPropertyToTerraform(struct?: CcEventBridgeRuleTemplate.EventBridgeRuleTemplateTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        arn: cdktn.stringToTerraform(struct!.arn),
    }
}


export function ccEventBridgeRuleTemplateEventBridgeRuleTemplateTargetPropertyToHclTerraform(struct?: CcEventBridgeRuleTemplate.EventBridgeRuleTemplateTargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        arn: {
            value: cdktn.stringToHclTerraform(struct!.arn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcEventBridgeRuleTemplate {
export interface EventBridgeRuleTemplateTargetProperty {
    /**
    * Target ARNs must be either an SNS topic or CloudWatch log group.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/medialive_event_bridge_rule_template#arn CcEventBridgeRuleTemplate#arn}
    */
    readonly arn?: string;
}
export class EventBridgeRuleTemplateTargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): EventBridgeRuleTemplateTargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._arn !== undefined) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: EventBridgeRuleTemplateTargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._arn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._arn = value.arn;
        }
    }

    // arn - computed: true, optional: true, required: false
    private _arn?: string; 
    public get arn() {
        return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
        this._arn = value;
    }
    public resetArn() {
        this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
        return this._arn;
    }
}

export class EventBridgeRuleTemplateTargetPropertyList extends cdktn.ComplexList {
    public internalValue? : EventBridgeRuleTemplateTargetProperty[] | cdktn.IResolvable

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
    public get(index: number): EventBridgeRuleTemplateTargetPropertyOutputReference {
        return new EventBridgeRuleTemplateTargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
