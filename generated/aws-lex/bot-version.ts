// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lex_bot_version

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcBotVersionProps extends cdktn.TerraformMetaArguments {
    /**
    * Unique ID of resource
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lex_bot_version#bot_id CcBotVersion#bot_id}
    */
    readonly botId: string;
    /**
    * Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lex_bot_version#bot_version_locale_specification CcBotVersion#bot_version_locale_specification}
    */
    readonly botVersionLocaleSpecification: CcBotVersion.BotVersionLocaleSpecificationProperty[] | cdktn.IResolvable;
    /**
    * A description of the version. Use the description to help identify the version in lists.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lex_bot_version#description CcBotVersion#description}
    */
    readonly description?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lex_bot_version awscc_lex_bot_version}
*/
export class CcBotVersion extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_lex_bot_version";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcBotVersion resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcBotVersion to import
    * @param importFromId The id of the existing CcBotVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lex_bot_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcBotVersion to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_lex_bot_version", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lex_bot_version awscc_lex_bot_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcBotVersionProps
    */
    public constructor(scope: Construct, id: string, config: CcBotVersionProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_lex_bot_version',
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
        this._botId = config.botId;
        this._botVersionLocaleSpecification.internalValue = config.botVersionLocaleSpecification;
        this._description = config.description;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // bot_id - computed: false, optional: false, required: true
    private _botId?: string; 
    public get botId() {
        return this.getStringAttribute('bot_id');
    }
    public set botId(value: string) {
        this._botId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get botIdInput() {
        return this._botId;
    }

    // bot_version - computed: true, optional: false, required: false
    public get botVersion() {
        return this.getStringAttribute('bot_version');
    }

    // bot_version_locale_specification - computed: false, optional: false, required: true
    private _botVersionLocaleSpecification = new CcBotVersion.BotVersionLocaleSpecificationPropertyList(this, "bot_version_locale_specification", false);
    public get botVersionLocaleSpecification() {
        return this._botVersionLocaleSpecification;
    }
    public putBotVersionLocaleSpecification(value: CcBotVersion.BotVersionLocaleSpecificationProperty[] | cdktn.IResolvable) {
        this._botVersionLocaleSpecification.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get botVersionLocaleSpecificationInput() {
        return this._botVersionLocaleSpecification.internalValue;
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            bot_id: cdktn.stringToTerraform(this._botId),
            bot_version_locale_specification: cdktn.listMapper(ccBotVersionBotVersionLocaleSpecificationPropertyToTerraform, false)(this._botVersionLocaleSpecification.internalValue),
            description: cdktn.stringToTerraform(this._description),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            bot_id: {
                value: cdktn.stringToHclTerraform(this._botId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            bot_version_locale_specification: {
                value: cdktn.listMapperHcl(ccBotVersionBotVersionLocaleSpecificationPropertyToHclTerraform, false)(this._botVersionLocaleSpecification.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcBotVersion.BotVersionLocaleSpecificationPropertyList",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccBotVersionBotVersionLocaleDetailsPropertyToTerraform(struct?: CcBotVersion.BotVersionLocaleDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        source_bot_version: cdktn.stringToTerraform(struct!.sourceBotVersion),
    }
}


export function ccBotVersionBotVersionLocaleDetailsPropertyToHclTerraform(struct?: CcBotVersion.BotVersionLocaleDetailsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        source_bot_version: {
            value: cdktn.stringToHclTerraform(struct!.sourceBotVersion),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccBotVersionBotVersionLocaleSpecificationPropertyToTerraform(struct?: CcBotVersion.BotVersionLocaleSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        bot_version_locale_details: ccBotVersionBotVersionLocaleDetailsPropertyToTerraform(struct!.botVersionLocaleDetails),
        locale_id: cdktn.stringToTerraform(struct!.localeId),
    }
}


export function ccBotVersionBotVersionLocaleSpecificationPropertyToHclTerraform(struct?: CcBotVersion.BotVersionLocaleSpecificationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        bot_version_locale_details: {
            value: ccBotVersionBotVersionLocaleDetailsPropertyToHclTerraform(struct!.botVersionLocaleDetails),
            isBlock: true,
            type: "struct",
            storageClassType: "BotVersionLocaleDetailsProperty",
        },
        locale_id: {
            value: cdktn.stringToHclTerraform(struct!.localeId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export namespace CcBotVersion {
export interface BotVersionLocaleDetailsProperty {
    /**
    * The version of a bot.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lex_bot_version#source_bot_version CcBotVersion#source_bot_version}
    */
    readonly sourceBotVersion: string;
}
export class BotVersionLocaleDetailsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): BotVersionLocaleDetailsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._sourceBotVersion !== undefined) {
            hasAnyValues = true;
            internalValueResult.sourceBotVersion = this._sourceBotVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BotVersionLocaleDetailsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._sourceBotVersion = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._sourceBotVersion = value.sourceBotVersion;
        }
    }

    // source_bot_version - computed: false, optional: false, required: true
    private _sourceBotVersion?: string; 
    public get sourceBotVersion() {
        return this.getStringAttribute('source_bot_version');
    }
    public set sourceBotVersion(value: string) {
        this._sourceBotVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    public get sourceBotVersionInput() {
        return this._sourceBotVersion;
    }
}
export interface BotVersionLocaleSpecificationProperty {
    /**
    * The version of a bot used for a bot locale.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lex_bot_version#bot_version_locale_details CcBotVersion#bot_version_locale_details}
    */
    readonly botVersionLocaleDetails: BotVersionLocaleDetailsProperty;
    /**
    * The identifier of the language and locale that the bot will be used in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/lex_bot_version#locale_id CcBotVersion#locale_id}
    */
    readonly localeId: string;
}
export class BotVersionLocaleSpecificationPropertyOutputReference extends cdktn.ComplexObject {
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

    public get internalValue(): BotVersionLocaleSpecificationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._botVersionLocaleDetails?.internalValue !== undefined) {
            hasAnyValues = true;
            internalValueResult.botVersionLocaleDetails = this._botVersionLocaleDetails?.internalValue;
        }
        if (this._localeId !== undefined) {
            hasAnyValues = true;
            internalValueResult.localeId = this._localeId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: BotVersionLocaleSpecificationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._botVersionLocaleDetails.internalValue = undefined;
            this._localeId = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._botVersionLocaleDetails.internalValue = value.botVersionLocaleDetails;
            this._localeId = value.localeId;
        }
    }

    // bot_version_locale_details - computed: false, optional: false, required: true
    private _botVersionLocaleDetails = new BotVersionLocaleDetailsPropertyOutputReference(this, "bot_version_locale_details");
    public get botVersionLocaleDetails() {
        return this._botVersionLocaleDetails;
    }
    public putBotVersionLocaleDetails(value: BotVersionLocaleDetailsProperty) {
        this._botVersionLocaleDetails.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get botVersionLocaleDetailsInput() {
        return this._botVersionLocaleDetails.internalValue;
    }

    // locale_id - computed: false, optional: false, required: true
    private _localeId?: string; 
    public get localeId() {
        return this.getStringAttribute('locale_id');
    }
    public set localeId(value: string) {
        this._localeId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get localeIdInput() {
        return this._localeId;
    }
}

export class BotVersionLocaleSpecificationPropertyList extends cdktn.ComplexList {
    public internalValue? : BotVersionLocaleSpecificationProperty[] | cdktn.IResolvable

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
    public get(index: number): BotVersionLocaleSpecificationPropertyOutputReference {
        return new BotVersionLocaleSpecificationPropertyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
    }
}
}
