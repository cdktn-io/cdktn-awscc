// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNotificationRuleProps extends cdktn.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#created_by CcNotificationRule#created_by}
    */
    readonly createdBy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#detail_type CcNotificationRule#detail_type}
    */
    readonly detailType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#event_type_id CcNotificationRule#event_type_id}
    */
    readonly eventTypeId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#event_type_ids CcNotificationRule#event_type_ids}
    */
    readonly eventTypeIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#name CcNotificationRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#resource CcNotificationRule#resource}
    */
    readonly resource: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#status CcNotificationRule#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#tags CcNotificationRule#tags}
    */
    readonly tags?: { [key: string]: string };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#target_address CcNotificationRule#target_address}
    */
    readonly targetAddress?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#targets CcNotificationRule#targets}
    */
    readonly targets: CcNotificationRule.TargetProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule awscc_codestarnotifications_notification_rule}
*/
export class CcNotificationRule extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_codestarnotifications_notification_rule";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNotificationRule resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNotificationRule to import
    * @param importFromId The id of the existing CcNotificationRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNotificationRule to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_codestarnotifications_notification_rule", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule awscc_codestarnotifications_notification_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNotificationRuleProps
    */
    public constructor(scope: Construct, id: string, config: CcNotificationRuleProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_codestarnotifications_notification_rule',
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
        this._createdBy = config.createdBy;
        this._detailType = config.detailType;
        this._eventTypeId = config.eventTypeId;
        this._eventTypeIds = config.eventTypeIds;
        this._name = config.name;
        this._resource = config.resource;
        this._status = config.status;
        this._tags = config.tags;
        this._targetAddress = config.targetAddress;
        this._targets.internalValue = config.targets;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // created_by - computed: true, optional: true, required: false
    private _createdBy?: string; 
    public get createdBy() {
        return this.getStringAttribute('created_by');
    }
    public set createdBy(value: string) {
        this._createdBy = value;
    }
    public resetCreatedBy() {
        this._createdBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get createdByInput() {
        return this._createdBy;
    }

    // detail_type - computed: false, optional: false, required: true
    private _detailType?: string; 
    public get detailType() {
        return this.getStringAttribute('detail_type');
    }
    public set detailType(value: string) {
        this._detailType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get detailTypeInput() {
        return this._detailType;
    }

    // event_type_id - computed: true, optional: true, required: false
    private _eventTypeId?: string; 
    public get eventTypeId() {
        return this.getStringAttribute('event_type_id');
    }
    public set eventTypeId(value: string) {
        this._eventTypeId = value;
    }
    public resetEventTypeId() {
        this._eventTypeId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTypeIdInput() {
        return this._eventTypeId;
    }

    // event_type_ids - computed: false, optional: false, required: true
    private _eventTypeIds?: string[]; 
    public get eventTypeIds() {
        return this.getListAttribute('event_type_ids');
    }
    public set eventTypeIds(value: string[]) {
        this._eventTypeIds = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventTypeIdsInput() {
        return this._eventTypeIds;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
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

    // resource - computed: false, optional: false, required: true
    private _resource?: string; 
    public get resource() {
        return this.getStringAttribute('resource');
    }
    public set resource(value: string) {
        this._resource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceInput() {
        return this._resource;
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

    // target_address - computed: true, optional: true, required: false
    private _targetAddress?: string; 
    public get targetAddress() {
        return this.getStringAttribute('target_address');
    }
    public set targetAddress(value: string) {
        this._targetAddress = value;
    }
    public resetTargetAddress() {
        this._targetAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetAddressInput() {
        return this._targetAddress;
    }

    // targets - computed: false, optional: false, required: true
    private _targets = new CcNotificationRule.TargetPropertyList(this, "targets", false);
    public get targets() {
        return this._targets;
    }
    public putTargets(value: CcNotificationRule.TargetProperty[] | cdktn.IResolvable) {
        this._targets.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetsInput() {
        return this._targets.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            created_by: cdktn.stringToTerraform(this._createdBy),
            detail_type: cdktn.stringToTerraform(this._detailType),
            event_type_id: cdktn.stringToTerraform(this._eventTypeId),
            event_type_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._eventTypeIds),
            name: cdktn.stringToTerraform(this._name),
            resource: cdktn.stringToTerraform(this._resource),
            status: cdktn.stringToTerraform(this._status),
            tags: cdktn.hashMapper(cdktn.stringToTerraform)(this._tags),
            target_address: cdktn.stringToTerraform(this._targetAddress),
            targets: cdktn.listMapper(ccNotificationRuleTargetPropertyToTerraform, false)(this._targets.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            created_by: {
                value: cdktn.stringToHclTerraform(this._createdBy),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            detail_type: {
                value: cdktn.stringToHclTerraform(this._detailType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_type_id: {
                value: cdktn.stringToHclTerraform(this._eventTypeId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            event_type_ids: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._eventTypeIds),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            name: {
                value: cdktn.stringToHclTerraform(this._name),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            resource: {
                value: cdktn.stringToHclTerraform(this._resource),
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
            tags: {
                value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._tags),
                isBlock: false,
                type: "map",
                storageClassType: "stringMap",
            },
            target_address: {
                value: cdktn.stringToHclTerraform(this._targetAddress),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            targets: {
                value: cdktn.listMapperHcl(ccNotificationRuleTargetPropertyToHclTerraform, false)(this._targets.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcNotificationRule.TargetPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNotificationRuleTargetPropertyToTerraform(struct?: CcNotificationRule.TargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        target_address: cdktn.stringToTerraform(struct!.targetAddress),
        target_type: cdktn.stringToTerraform(struct!.targetType),
    }
}


export function ccNotificationRuleTargetPropertyToHclTerraform(struct?: CcNotificationRule.TargetProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        target_address: {
            value: cdktn.stringToHclTerraform(struct!.targetAddress),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        target_type: {
            value: cdktn.stringToHclTerraform(struct!.targetType),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcNotificationRule {
export interface TargetProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#target_address CcNotificationRule#target_address}
    */
    readonly targetAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/codestarnotifications_notification_rule#target_type CcNotificationRule#target_type}
    */
    readonly targetType: string;
}
export class TargetPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TargetProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._targetAddress !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetAddress = this._targetAddress;
        }
        if (this._targetType !== undefined) {
            hasAnyValues = true;
            internalValueResult.targetType = this._targetType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TargetProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._targetAddress = undefined;
            this._targetType = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._targetAddress = value.targetAddress;
            this._targetType = value.targetType;
        }
    }

    // target_address - computed: false, optional: false, required: true
    private _targetAddress?: string; 
    public get targetAddress() {
        return this.getStringAttribute('target_address');
    }
    public set targetAddress(value: string) {
        this._targetAddress = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetAddressInput() {
        return this._targetAddress;
    }

    // target_type - computed: false, optional: false, required: true
    private _targetType?: string; 
    public get targetType() {
        return this.getStringAttribute('target_type');
    }
    public set targetType(value: string) {
        this._targetType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetTypeInput() {
        return this._targetType;
    }
}

export class TargetPropertyList extends cdktn.ComplexList {
    public internalValue? : TargetProperty[] | cdktn.IResolvable

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
    public get(index: number): TargetPropertyOutputReference {
        return new TargetPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
