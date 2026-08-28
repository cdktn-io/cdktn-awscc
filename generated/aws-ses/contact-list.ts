// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcContactListProps extends cdktn.TerraformMetaArguments {
    /**
    * The name of the contact list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#contact_list_name CcContactList#contact_list_name}
    */
    readonly contactListName?: string;
    /**
    * The description of the contact list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#description CcContactList#description}
    */
    readonly description?: string;
    /**
    * The tags (keys and values) associated with the contact list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#tags CcContactList#tags}
    */
    readonly tags?: CcContactList.TagProperty[] | cdktn.IResolvable;
    /**
    * The topics associated with the contact list.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#topics CcContactList#topics}
    */
    readonly topics?: CcContactList.TopicProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list awscc_ses_contact_list}
*/
export class CcContactList extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ses_contact_list";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcContactList resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcContactList to import
    * @param importFromId The id of the existing CcContactList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcContactList to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ses_contact_list", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list awscc_ses_contact_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcContactListProps = {}
    */
    public constructor(scope: Construct, id: string, config: CcContactListProps = {}) {
        super(scope, id, {
            terraformResourceType: 'awscc_ses_contact_list',
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
        this._contactListName = config.contactListName;
        this._description = config.description;
        this._tags.internalValue = config.tags;
        this._topics.internalValue = config.topics;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // contact_list_name - computed: true, optional: true, required: false
    private _contactListName?: string; 
    public get contactListName() {
        return this.getStringAttribute('contact_list_name');
    }
    public set contactListName(value: string) {
        this._contactListName = value;
    }
    public resetContactListName() {
        this._contactListName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contactListNameInput() {
        return this._contactListName;
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

    // tags - computed: true, optional: true, required: false
    private _tags = new CcContactList.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcContactList.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // topics - computed: true, optional: true, required: false
    private _topics = new CcContactList.TopicPropertyList(this, "topics", false);
    public get topics() {
        return this._topics;
    }
    public putTopics(value: CcContactList.TopicProperty[] | cdktn.IResolvable) {
        this._topics.internalValue = value;
    }
    public resetTopics() {
        this._topics.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicsInput() {
        return this._topics.internalValue;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            contact_list_name: cdktn.stringToTerraform(this._contactListName),
            description: cdktn.stringToTerraform(this._description),
            tags: cdktn.listMapper(ccContactListTagPropertyToTerraform, false)(this._tags.internalValue),
            topics: cdktn.listMapper(ccContactListTopicPropertyToTerraform, false)(this._topics.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            contact_list_name: {
                value: cdktn.stringToHclTerraform(this._contactListName),
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
            tags: {
                value: cdktn.listMapperHcl(ccContactListTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContactList.TagPropertyList",
            },
            topics: {
                value: cdktn.listMapperHcl(ccContactListTopicPropertyToHclTerraform, false)(this._topics.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcContactList.TopicPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccContactListTagPropertyToTerraform(struct?: CcContactList.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccContactListTagPropertyToHclTerraform(struct?: CcContactList.TagProperty | cdktn.IResolvable): any {
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


export function ccContactListTopicPropertyToTerraform(struct?: CcContactList.TopicProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        default_subscription_status: cdktn.stringToTerraform(struct!.defaultSubscriptionStatus),
        description: cdktn.stringToTerraform(struct!.description),
        display_name: cdktn.stringToTerraform(struct!.displayName),
        topic_name: cdktn.stringToTerraform(struct!.topicName),
    }
}


export function ccContactListTopicPropertyToHclTerraform(struct?: CcContactList.TopicProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        default_subscription_status: {
            value: cdktn.stringToHclTerraform(struct!.defaultSubscriptionStatus),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        description: {
            value: cdktn.stringToHclTerraform(struct!.description),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        display_name: {
            value: cdktn.stringToHclTerraform(struct!.displayName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        topic_name: {
            value: cdktn.stringToHclTerraform(struct!.topicName),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcContactList {
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#key CcContactList#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#value CcContactList#value}
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
export interface TopicProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#default_subscription_status CcContactList#default_subscription_status}
    */
    readonly defaultSubscriptionStatus?: string;
    /**
    * The description of the topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#description CcContactList#description}
    */
    readonly description?: string;
    /**
    * The display name of the topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#display_name CcContactList#display_name}
    */
    readonly displayName?: string;
    /**
    * The name of the topic.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ses_contact_list#topic_name CcContactList#topic_name}
    */
    readonly topicName?: string;
}
export class TopicPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): TopicProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._defaultSubscriptionStatus !== undefined) {
            hasAnyValues = true;
            internalValueResult.defaultSubscriptionStatus = this._defaultSubscriptionStatus;
        }
        if (this._description !== undefined) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._displayName !== undefined) {
            hasAnyValues = true;
            internalValueResult.displayName = this._displayName;
        }
        if (this._topicName !== undefined) {
            hasAnyValues = true;
            internalValueResult.topicName = this._topicName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: TopicProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._defaultSubscriptionStatus = undefined;
            this._description = undefined;
            this._displayName = undefined;
            this._topicName = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._defaultSubscriptionStatus = value.defaultSubscriptionStatus;
            this._description = value.description;
            this._displayName = value.displayName;
            this._topicName = value.topicName;
        }
    }

    // default_subscription_status - computed: true, optional: true, required: false
    private _defaultSubscriptionStatus?: string; 
    public get defaultSubscriptionStatus() {
        return this.getStringAttribute('default_subscription_status');
    }
    public set defaultSubscriptionStatus(value: string) {
        this._defaultSubscriptionStatus = value;
    }
    public resetDefaultSubscriptionStatus() {
        this._defaultSubscriptionStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get defaultSubscriptionStatusInput() {
        return this._defaultSubscriptionStatus;
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

    // topic_name - computed: true, optional: true, required: false
    private _topicName?: string; 
    public get topicName() {
        return this.getStringAttribute('topic_name');
    }
    public set topicName(value: string) {
        this._topicName = value;
    }
    public resetTopicName() {
        this._topicName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get topicNameInput() {
        return this._topicName;
    }
}

export class TopicPropertyList extends cdktn.ComplexList {
    public internalValue? : TopicProperty[] | cdktn.IResolvable

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
    public get(index: number): TopicPropertyOutputReference {
        return new TopicPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
