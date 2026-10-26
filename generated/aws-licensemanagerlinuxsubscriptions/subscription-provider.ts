// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcSubscriptionProviderProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Resource Name (ARN) of the Secrets Manager secret that contains the access token for the third-party Linux subscription provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#secret_arn CcSubscriptionProvider#secret_arn}
    */
    readonly secretArn: string;
    /**
    * The Linux subscription provider that the registration is for.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#subscription_provider_source CcSubscriptionProvider#subscription_provider_source}
    */
    readonly subscriptionProviderSource: string;
    /**
    * The metadata tags assigned to the registered subscription provider.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#tags CcSubscriptionProvider#tags}
    */
    readonly tags?: CcSubscriptionProvider.TagsProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider awscc_licensemanagerlinuxsubscriptions_subscription_provider}
*/
export class CcSubscriptionProvider extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_licensemanagerlinuxsubscriptions_subscription_provider";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcSubscriptionProvider resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcSubscriptionProvider to import
    * @param importFromId The id of the existing CcSubscriptionProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcSubscriptionProvider to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_licensemanagerlinuxsubscriptions_subscription_provider", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider awscc_licensemanagerlinuxsubscriptions_subscription_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcSubscriptionProviderProps
    */
    public constructor(scope: Construct, id: string, config: CcSubscriptionProviderProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_licensemanagerlinuxsubscriptions_subscription_provider',
            terraformGeneratorMetadata: {
                providerName: 'awscc',
                providerVersion: '1.107.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._secretArn = config.secretArn;
        this._subscriptionProviderSource = config.subscriptionProviderSource;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // last_successful_data_retrieval_time - computed: true, optional: false, required: false
    public get lastSuccessfulDataRetrievalTime() {
        return this.getStringAttribute('last_successful_data_retrieval_time');
    }

    // secret_arn - computed: false, optional: false, required: true
    private _secretArn?: string; 
    public get secretArn() {
        return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
        this._secretArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
        return this._secretArn;
    }

    // subscription_provider_arn - computed: true, optional: false, required: false
    public get subscriptionProviderArn() {
        return this.getStringAttribute('subscription_provider_arn');
    }

    // subscription_provider_source - computed: false, optional: false, required: true
    private _subscriptionProviderSource?: string; 
    public get subscriptionProviderSource() {
        return this.getStringAttribute('subscription_provider_source');
    }
    public set subscriptionProviderSource(value: string) {
        this._subscriptionProviderSource = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subscriptionProviderSourceInput() {
        return this._subscriptionProviderSource;
    }

    // subscription_provider_status - computed: true, optional: false, required: false
    public get subscriptionProviderStatus() {
        return this.getStringAttribute('subscription_provider_status');
    }

    // subscription_provider_status_message - computed: true, optional: false, required: false
    public get subscriptionProviderStatusMessage() {
        return this.getStringAttribute('subscription_provider_status_message');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcSubscriptionProvider.TagsPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcSubscriptionProvider.TagsProperty[] | cdktn.IResolvable) {
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
            secret_arn: cdktn.stringToTerraform(this._secretArn),
            subscription_provider_source: cdktn.stringToTerraform(this._subscriptionProviderSource),
            tags: cdktn.listMapper(ccSubscriptionProviderTagsPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            secret_arn: {
                value: cdktn.stringToHclTerraform(this._secretArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            subscription_provider_source: {
                value: cdktn.stringToHclTerraform(this._subscriptionProviderSource),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccSubscriptionProviderTagsPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcSubscriptionProvider.TagsPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccSubscriptionProviderTagsPropertyToTerraform(struct?: CcSubscriptionProvider.TagsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccSubscriptionProviderTagsPropertyToHclTerraform(struct?: CcSubscriptionProvider.TagsProperty | cdktn.IResolvable): any {
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


export namespace CcSubscriptionProvider {
export interface TagsProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#key CcSubscriptionProvider#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/licensemanagerlinuxsubscriptions_subscription_provider#value CcSubscriptionProvider#value}
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
