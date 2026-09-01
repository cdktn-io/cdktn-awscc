// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcChangeSetProps extends cdktn.TerraformMetaArguments {
    /**
    * The capabilities that are allowed in the stack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#capabilities CcChangeSet#capabilities}
    */
    readonly capabilities?: string[];
    /**
    * The name of the change set. Must be unique among all change sets associated with the specified stack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#change_set_name CcChangeSet#change_set_name}
    */
    readonly changeSetName: string;
    /**
    * The type of change set operation.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#change_set_type CcChangeSet#change_set_type}
    */
    readonly changeSetType?: string;
    /**
    * Determines how CloudFormation handles configuration drift during deployment.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#deployment_mode CcChangeSet#deployment_mode}
    */
    readonly deploymentMode?: string;
    /**
    * A description to help you identify this change set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#description CcChangeSet#description}
    */
    readonly description?: string;
    /**
    * Indicates if the change set imports resources that already exist.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#import_existing_resources CcChangeSet#import_existing_resources}
    */
    readonly importExistingResources?: boolean | cdktn.IResolvable;
    /**
    * Creates a change set for all nested stacks specified in the template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#include_nested_stacks CcChangeSet#include_nested_stacks}
    */
    readonly includeNestedStacks?: boolean | cdktn.IResolvable;
    /**
    * The ARNs of Amazon SNS topics that CloudFormation associates with the stack.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#notification_ar_ns CcChangeSet#notification_ar_ns}
    */
    readonly notificationArNs?: string[];
    /**
    * Determines what action will be taken if stack creation fails.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#on_stack_failure CcChangeSet#on_stack_failure}
    */
    readonly onStackFailure?: string;
    /**
    * The ARN of an IAM role that CloudFormation assumes when executing the change set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#role_arn CcChangeSet#role_arn}
    */
    readonly roleArn?: string;
    /**
    * The name or unique ID of the stack for which you are creating a change set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#stack_name CcChangeSet#stack_name}
    */
    readonly stackName: string;
    /**
    * Key-value pairs to associate with the change set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#tags CcChangeSet#tags}
    */
    readonly tags?: CcChangeSet.TagsItemsProperty[] | cdktn.IResolvable;
    /**
    * A structure that contains the body of the revised template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#template_body CcChangeSet#template_body}
    */
    readonly templateBody?: string;
    /**
    * The URL of the file that contains the revised template.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#template_url CcChangeSet#template_url}
    */
    readonly templateUrl?: string;
    /**
    * Whether to reuse the template associated with the stack to create the change set.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#use_previous_template CcChangeSet#use_previous_template}
    */
    readonly usePreviousTemplate?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set awscc_cloudformation_change_set}
*/
export class CcChangeSet extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_cloudformation_change_set";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcChangeSet resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcChangeSet to import
    * @param importFromId The id of the existing CcChangeSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcChangeSet to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_cloudformation_change_set", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set awscc_cloudformation_change_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcChangeSetProps
    */
    public constructor(scope: Construct, id: string, config: CcChangeSetProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_cloudformation_change_set',
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
        this._capabilities = config.capabilities;
        this._changeSetName = config.changeSetName;
        this._changeSetType = config.changeSetType;
        this._deploymentMode = config.deploymentMode;
        this._description = config.description;
        this._importExistingResources = config.importExistingResources;
        this._includeNestedStacks = config.includeNestedStacks;
        this._notificationArNs = config.notificationArNs;
        this._onStackFailure = config.onStackFailure;
        this._roleArn = config.roleArn;
        this._stackName = config.stackName;
        this._tags.internalValue = config.tags;
        this._templateBody = config.templateBody;
        this._templateUrl = config.templateUrl;
        this._usePreviousTemplate = config.usePreviousTemplate;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // capabilities - computed: true, optional: true, required: false
    private _capabilities?: string[]; 
    public get capabilities() {
        return this.getListAttribute('capabilities');
    }
    public set capabilities(value: string[]) {
        this._capabilities = value;
    }
    public resetCapabilities() {
        this._capabilities = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get capabilitiesInput() {
        return this._capabilities;
    }

    // change_set_id - computed: true, optional: false, required: false
    public get changeSetId() {
        return this.getStringAttribute('change_set_id');
    }

    // change_set_name - computed: false, optional: false, required: true
    private _changeSetName?: string; 
    public get changeSetName() {
        return this.getStringAttribute('change_set_name');
    }
    public set changeSetName(value: string) {
        this._changeSetName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get changeSetNameInput() {
        return this._changeSetName;
    }

    // change_set_type - computed: true, optional: true, required: false
    private _changeSetType?: string; 
    public get changeSetType() {
        return this.getStringAttribute('change_set_type');
    }
    public set changeSetType(value: string) {
        this._changeSetType = value;
    }
    public resetChangeSetType() {
        this._changeSetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get changeSetTypeInput() {
        return this._changeSetType;
    }

    // creation_time - computed: true, optional: false, required: false
    public get creationTime() {
        return this.getStringAttribute('creation_time');
    }

    // deployment_mode - computed: true, optional: true, required: false
    private _deploymentMode?: string; 
    public get deploymentMode() {
        return this.getStringAttribute('deployment_mode');
    }
    public set deploymentMode(value: string) {
        this._deploymentMode = value;
    }
    public resetDeploymentMode() {
        this._deploymentMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentModeInput() {
        return this._deploymentMode;
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

    // import_existing_resources - computed: true, optional: true, required: false
    private _importExistingResources?: boolean | cdktn.IResolvable; 
    public get importExistingResources() {
        return this.getBooleanAttribute('import_existing_resources');
    }
    public set importExistingResources(value: boolean | cdktn.IResolvable) {
        this._importExistingResources = value;
    }
    public resetImportExistingResources() {
        this._importExistingResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get importExistingResourcesInput() {
        return this._importExistingResources;
    }

    // include_nested_stacks - computed: true, optional: true, required: false
    private _includeNestedStacks?: boolean | cdktn.IResolvable; 
    public get includeNestedStacks() {
        return this.getBooleanAttribute('include_nested_stacks');
    }
    public set includeNestedStacks(value: boolean | cdktn.IResolvable) {
        this._includeNestedStacks = value;
    }
    public resetIncludeNestedStacks() {
        this._includeNestedStacks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get includeNestedStacksInput() {
        return this._includeNestedStacks;
    }

    // notification_ar_ns - computed: true, optional: true, required: false
    private _notificationArNs?: string[]; 
    public get notificationArNs() {
        return this.getListAttribute('notification_ar_ns');
    }
    public set notificationArNs(value: string[]) {
        this._notificationArNs = value;
    }
    public resetNotificationArNs() {
        this._notificationArNs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationArNsInput() {
        return this._notificationArNs;
    }

    // on_stack_failure - computed: true, optional: true, required: false
    private _onStackFailure?: string; 
    public get onStackFailure() {
        return this.getStringAttribute('on_stack_failure');
    }
    public set onStackFailure(value: string) {
        this._onStackFailure = value;
    }
    public resetOnStackFailure() {
        this._onStackFailure = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get onStackFailureInput() {
        return this._onStackFailure;
    }

    // role_arn - computed: true, optional: true, required: false
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    public resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // stack_id - computed: true, optional: false, required: false
    public get stackId() {
        return this.getStringAttribute('stack_id');
    }

    // stack_name - computed: false, optional: false, required: true
    private _stackName?: string; 
    public get stackName() {
        return this.getStringAttribute('stack_name');
    }
    public set stackName(value: string) {
        this._stackName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stackNameInput() {
        return this._stackName;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcChangeSet.TagsItemsPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcChangeSet.TagsItemsProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // template_body - computed: true, optional: true, required: false
    private _templateBody?: string; 
    public get templateBody() {
        return this.getStringAttribute('template_body');
    }
    public set templateBody(value: string) {
        this._templateBody = value;
    }
    public resetTemplateBody() {
        this._templateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateBodyInput() {
        return this._templateBody;
    }

    // template_url - computed: true, optional: true, required: false
    private _templateUrl?: string; 
    public get templateUrl() {
        return this.getStringAttribute('template_url');
    }
    public set templateUrl(value: string) {
        this._templateUrl = value;
    }
    public resetTemplateUrl() {
        this._templateUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get templateUrlInput() {
        return this._templateUrl;
    }

    // use_previous_template - computed: true, optional: true, required: false
    private _usePreviousTemplate?: boolean | cdktn.IResolvable; 
    public get usePreviousTemplate() {
        return this.getBooleanAttribute('use_previous_template');
    }
    public set usePreviousTemplate(value: boolean | cdktn.IResolvable) {
        this._usePreviousTemplate = value;
    }
    public resetUsePreviousTemplate() {
        this._usePreviousTemplate = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get usePreviousTemplateInput() {
        return this._usePreviousTemplate;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            capabilities: cdktn.listMapper(cdktn.stringToTerraform, false)(this._capabilities),
            change_set_name: cdktn.stringToTerraform(this._changeSetName),
            change_set_type: cdktn.stringToTerraform(this._changeSetType),
            deployment_mode: cdktn.stringToTerraform(this._deploymentMode),
            description: cdktn.stringToTerraform(this._description),
            import_existing_resources: cdktn.booleanToTerraform(this._importExistingResources),
            include_nested_stacks: cdktn.booleanToTerraform(this._includeNestedStacks),
            notification_ar_ns: cdktn.listMapper(cdktn.stringToTerraform, false)(this._notificationArNs),
            on_stack_failure: cdktn.stringToTerraform(this._onStackFailure),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            stack_name: cdktn.stringToTerraform(this._stackName),
            tags: cdktn.listMapper(ccChangeSetTagsItemsPropertyToTerraform, false)(this._tags.internalValue),
            template_body: cdktn.stringToTerraform(this._templateBody),
            template_url: cdktn.stringToTerraform(this._templateUrl),
            use_previous_template: cdktn.booleanToTerraform(this._usePreviousTemplate),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            capabilities: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._capabilities),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            change_set_name: {
                value: cdktn.stringToHclTerraform(this._changeSetName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            change_set_type: {
                value: cdktn.stringToHclTerraform(this._changeSetType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            deployment_mode: {
                value: cdktn.stringToHclTerraform(this._deploymentMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            import_existing_resources: {
                value: cdktn.booleanToHclTerraform(this._importExistingResources),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            include_nested_stacks: {
                value: cdktn.booleanToHclTerraform(this._includeNestedStacks),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            notification_ar_ns: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._notificationArNs),
                isBlock: false,
                type: "list",
                storageClassType: "stringList",
            },
            on_stack_failure: {
                value: cdktn.stringToHclTerraform(this._onStackFailure),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            stack_name: {
                value: cdktn.stringToHclTerraform(this._stackName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccChangeSetTagsItemsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcChangeSet.TagsItemsPropertyList",
            },
            template_body: {
                value: cdktn.stringToHclTerraform(this._templateBody),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            template_url: {
                value: cdktn.stringToHclTerraform(this._templateUrl),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            use_previous_template: {
                value: cdktn.booleanToHclTerraform(this._usePreviousTemplate),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccChangeSetTagsItemsPropertyToTerraform(struct?: CcChangeSet.TagsItemsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccChangeSetTagsItemsPropertyToHclTerraform(struct?: CcChangeSet.TagsItemsProperty | cdktn.IResolvable): any {
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


export namespace CcChangeSet {
export interface TagsItemsProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#key CcChangeSet#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cloudformation_change_set#value CcChangeSet#value}
    */
    readonly value?: string;
}
export class TagsItemsPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TagsItemsProperty | cdktn.IResolvable | undefined {
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

    public set internalValue(value: TagsItemsProperty | cdktn.IResolvable | undefined) {
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

export class TagsItemsPropertyList extends cdktn.ComplexList {
    public internalValue? : TagsItemsProperty[] | cdktn.IResolvable

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
    public get(index: number): TagsItemsPropertyOutputReference {
        return new TagsItemsPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
