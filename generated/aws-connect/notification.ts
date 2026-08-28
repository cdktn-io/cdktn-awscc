// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcNotificationProps extends cdktn.TerraformMetaArguments {
    /**
    * The content of the notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#content CcNotification#content}
    */
    readonly content: CcNotification.NotificationContentProperty;
    /**
    * The time a notification will expire
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#expires_at CcNotification#expires_at}
    */
    readonly expiresAt?: string;
    /**
    * The identifier of the Amazon Connect instance.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#instance_arn CcNotification#instance_arn}
    */
    readonly instanceArn: string;
    /**
    * The priority of the notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#priority CcNotification#priority}
    */
    readonly priority?: string;
    /**
    * The recipients of the notification.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#recipients CcNotification#recipients}
    */
    readonly recipients?: string[];
    /**
    * One or more tags.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#tags CcNotification#tags}
    */
    readonly tags?: CcNotification.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification awscc_connect_notification}
*/
export class CcNotification extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_connect_notification";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcNotification resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcNotification to import
    * @param importFromId The id of the existing CcNotification that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcNotification to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_connect_notification", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification awscc_connect_notification} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcNotificationProps
    */
    public constructor(scope: Construct, id: string, config: CcNotificationProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_connect_notification',
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
        this._content.internalValue = config.content;
        this._expiresAt = config.expiresAt;
        this._instanceArn = config.instanceArn;
        this._priority = config.priority;
        this._recipients = config.recipients;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // content - computed: false, optional: false, required: true
    private _content = new CcNotification.NotificationContentPropertyOutputReference(this, "content");
    public get content() {
        return this._content;
    }
    public putContent(value: CcNotification.NotificationContentProperty) {
        this._content.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentInput() {
        return this._content.internalValue;
    }

    // created_at - computed: true, optional: false, required: false
    public get createdAt() {
        return this.getStringAttribute('created_at');
    }

    // expires_at - computed: true, optional: true, required: false
    private _expiresAt?: string; 
    public get expiresAt() {
        return this.getStringAttribute('expires_at');
    }
    public set expiresAt(value: string) {
        this._expiresAt = value;
    }
    public resetExpiresAt() {
        this._expiresAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get expiresAtInput() {
        return this._expiresAt;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // instance_arn - computed: false, optional: false, required: true
    private _instanceArn?: string; 
    public get instanceArn() {
        return this.getStringAttribute('instance_arn');
    }
    public set instanceArn(value: string) {
        this._instanceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get instanceArnInput() {
        return this._instanceArn;
    }

    // notification_id - computed: true, optional: false, required: false
    public get notificationId() {
        return this.getStringAttribute('notification_id');
    }

    // priority - computed: true, optional: true, required: false
    private _priority?: string; 
    public get priority() {
        return this.getStringAttribute('priority');
    }
    public set priority(value: string) {
        this._priority = value;
    }
    public resetPriority() {
        this._priority = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get priorityInput() {
        return this._priority;
    }

    // recipients - computed: true, optional: true, required: false
    private _recipients?: string[]; 
    public get recipients() {
        return cdktn.Fn.tolist(this.getListAttribute('recipients'));
    }
    public set recipients(value: string[]) {
        this._recipients = value;
    }
    public resetRecipients() {
        this._recipients = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get recipientsInput() {
        return this._recipients;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcNotification.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcNotification.TagProperty[] | cdktn.IResolvable) {
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
            content: ccNotificationNotificationContentPropertyToTerraform(this._content.internalValue),
            expires_at: cdktn.stringToTerraform(this._expiresAt),
            instance_arn: cdktn.stringToTerraform(this._instanceArn),
            priority: cdktn.stringToTerraform(this._priority),
            recipients: cdktn.listMapper(cdktn.stringToTerraform, false)(this._recipients),
            tags: cdktn.listMapper(ccNotificationTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            content: {
                value: ccNotificationNotificationContentPropertyToHclTerraform(this._content.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcNotification.NotificationContentProperty",
            },
            expires_at: {
                value: cdktn.stringToHclTerraform(this._expiresAt),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            instance_arn: {
                value: cdktn.stringToHclTerraform(this._instanceArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            priority: {
                value: cdktn.stringToHclTerraform(this._priority),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            recipients: {
                value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._recipients),
                isBlock: false,
                type: "set",
                storageClassType: "stringList",
            },
            tags: {
                value: cdktn.listMapperHcl(ccNotificationTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcNotification.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccNotificationNotificationContentPropertyToTerraform(struct?: CcNotification.NotificationContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        de_de: cdktn.stringToTerraform(struct!.deDe),
        en_us: cdktn.stringToTerraform(struct!.enUs),
        es_es: cdktn.stringToTerraform(struct!.esEs),
        fr_fr: cdktn.stringToTerraform(struct!.frFr),
        id_id: cdktn.stringToTerraform(struct!.idId),
        it_it: cdktn.stringToTerraform(struct!.itIt),
        ja_jp: cdktn.stringToTerraform(struct!.jaJp),
        ko_kr: cdktn.stringToTerraform(struct!.koKr),
        pt_br: cdktn.stringToTerraform(struct!.ptBr),
        zh_cn: cdktn.stringToTerraform(struct!.zhCn),
        zh_tw: cdktn.stringToTerraform(struct!.zhTw),
    }
}


export function ccNotificationNotificationContentPropertyToHclTerraform(struct?: CcNotification.NotificationContentProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        de_de: {
            value: cdktn.stringToHclTerraform(struct!.deDe),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        en_us: {
            value: cdktn.stringToHclTerraform(struct!.enUs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        es_es: {
            value: cdktn.stringToHclTerraform(struct!.esEs),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        fr_fr: {
            value: cdktn.stringToHclTerraform(struct!.frFr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        id_id: {
            value: cdktn.stringToHclTerraform(struct!.idId),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        it_it: {
            value: cdktn.stringToHclTerraform(struct!.itIt),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ja_jp: {
            value: cdktn.stringToHclTerraform(struct!.jaJp),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        ko_kr: {
            value: cdktn.stringToHclTerraform(struct!.koKr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        pt_br: {
            value: cdktn.stringToHclTerraform(struct!.ptBr),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zh_cn: {
            value: cdktn.stringToHclTerraform(struct!.zhCn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zh_tw: {
            value: cdktn.stringToHclTerraform(struct!.zhTw),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccNotificationTagPropertyToTerraform(struct?: CcNotification.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccNotificationTagPropertyToHclTerraform(struct?: CcNotification.TagProperty | cdktn.IResolvable): any {
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


export namespace CcNotification {
export interface NotificationContentProperty {
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#de_de CcNotification#de_de}
    */
    readonly deDe?: string;
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#en_us CcNotification#en_us}
    */
    readonly enUs?: string;
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#es_es CcNotification#es_es}
    */
    readonly esEs?: string;
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#fr_fr CcNotification#fr_fr}
    */
    readonly frFr?: string;
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#id_id CcNotification#id_id}
    */
    readonly idId?: string;
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#it_it CcNotification#it_it}
    */
    readonly itIt?: string;
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#ja_jp CcNotification#ja_jp}
    */
    readonly jaJp?: string;
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#ko_kr CcNotification#ko_kr}
    */
    readonly koKr?: string;
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#pt_br CcNotification#pt_br}
    */
    readonly ptBr?: string;
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#zh_cn CcNotification#zh_cn}
    */
    readonly zhCn?: string;
    /**
    * Localized notification content
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#zh_tw CcNotification#zh_tw}
    */
    readonly zhTw?: string;
}
export class NotificationContentPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): NotificationContentProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._deDe !== undefined) {
            hasAnyValues = true;
            internalValueResult.deDe = this._deDe;
        }
        if (this._enUs !== undefined) {
            hasAnyValues = true;
            internalValueResult.enUs = this._enUs;
        }
        if (this._esEs !== undefined) {
            hasAnyValues = true;
            internalValueResult.esEs = this._esEs;
        }
        if (this._frFr !== undefined) {
            hasAnyValues = true;
            internalValueResult.frFr = this._frFr;
        }
        if (this._idId !== undefined) {
            hasAnyValues = true;
            internalValueResult.idId = this._idId;
        }
        if (this._itIt !== undefined) {
            hasAnyValues = true;
            internalValueResult.itIt = this._itIt;
        }
        if (this._jaJp !== undefined) {
            hasAnyValues = true;
            internalValueResult.jaJp = this._jaJp;
        }
        if (this._koKr !== undefined) {
            hasAnyValues = true;
            internalValueResult.koKr = this._koKr;
        }
        if (this._ptBr !== undefined) {
            hasAnyValues = true;
            internalValueResult.ptBr = this._ptBr;
        }
        if (this._zhCn !== undefined) {
            hasAnyValues = true;
            internalValueResult.zhCn = this._zhCn;
        }
        if (this._zhTw !== undefined) {
            hasAnyValues = true;
            internalValueResult.zhTw = this._zhTw;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: NotificationContentProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._deDe = undefined;
            this._enUs = undefined;
            this._esEs = undefined;
            this._frFr = undefined;
            this._idId = undefined;
            this._itIt = undefined;
            this._jaJp = undefined;
            this._koKr = undefined;
            this._ptBr = undefined;
            this._zhCn = undefined;
            this._zhTw = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._deDe = value.deDe;
            this._enUs = value.enUs;
            this._esEs = value.esEs;
            this._frFr = value.frFr;
            this._idId = value.idId;
            this._itIt = value.itIt;
            this._jaJp = value.jaJp;
            this._koKr = value.koKr;
            this._ptBr = value.ptBr;
            this._zhCn = value.zhCn;
            this._zhTw = value.zhTw;
        }
    }

    // de_de - computed: true, optional: true, required: false
    private _deDe?: string; 
    public get deDe() {
        return this.getStringAttribute('de_de');
    }
    public set deDe(value: string) {
        this._deDe = value;
    }
    public resetDeDe() {
        this._deDe = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deDeInput() {
        return this._deDe;
    }

    // en_us - computed: true, optional: true, required: false
    private _enUs?: string; 
    public get enUs() {
        return this.getStringAttribute('en_us');
    }
    public set enUs(value: string) {
        this._enUs = value;
    }
    public resetEnUs() {
        this._enUs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enUsInput() {
        return this._enUs;
    }

    // es_es - computed: true, optional: true, required: false
    private _esEs?: string; 
    public get esEs() {
        return this.getStringAttribute('es_es');
    }
    public set esEs(value: string) {
        this._esEs = value;
    }
    public resetEsEs() {
        this._esEs = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get esEsInput() {
        return this._esEs;
    }

    // fr_fr - computed: true, optional: true, required: false
    private _frFr?: string; 
    public get frFr() {
        return this.getStringAttribute('fr_fr');
    }
    public set frFr(value: string) {
        this._frFr = value;
    }
    public resetFrFr() {
        this._frFr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get frFrInput() {
        return this._frFr;
    }

    // id_id - computed: true, optional: true, required: false
    private _idId?: string; 
    public get idId() {
        return this.getStringAttribute('id_id');
    }
    public set idId(value: string) {
        this._idId = value;
    }
    public resetIdId() {
        this._idId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get idIdInput() {
        return this._idId;
    }

    // it_it - computed: true, optional: true, required: false
    private _itIt?: string; 
    public get itIt() {
        return this.getStringAttribute('it_it');
    }
    public set itIt(value: string) {
        this._itIt = value;
    }
    public resetItIt() {
        this._itIt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get itItInput() {
        return this._itIt;
    }

    // ja_jp - computed: true, optional: true, required: false
    private _jaJp?: string; 
    public get jaJp() {
        return this.getStringAttribute('ja_jp');
    }
    public set jaJp(value: string) {
        this._jaJp = value;
    }
    public resetJaJp() {
        this._jaJp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jaJpInput() {
        return this._jaJp;
    }

    // ko_kr - computed: true, optional: true, required: false
    private _koKr?: string; 
    public get koKr() {
        return this.getStringAttribute('ko_kr');
    }
    public set koKr(value: string) {
        this._koKr = value;
    }
    public resetKoKr() {
        this._koKr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get koKrInput() {
        return this._koKr;
    }

    // pt_br - computed: true, optional: true, required: false
    private _ptBr?: string; 
    public get ptBr() {
        return this.getStringAttribute('pt_br');
    }
    public set ptBr(value: string) {
        this._ptBr = value;
    }
    public resetPtBr() {
        this._ptBr = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ptBrInput() {
        return this._ptBr;
    }

    // zh_cn - computed: true, optional: true, required: false
    private _zhCn?: string; 
    public get zhCn() {
        return this.getStringAttribute('zh_cn');
    }
    public set zhCn(value: string) {
        this._zhCn = value;
    }
    public resetZhCn() {
        this._zhCn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zhCnInput() {
        return this._zhCn;
    }

    // zh_tw - computed: true, optional: true, required: false
    private _zhTw?: string; 
    public get zhTw() {
        return this.getStringAttribute('zh_tw');
    }
    public set zhTw(value: string) {
        this._zhTw = value;
    }
    public resetZhTw() {
        this._zhTw = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zhTwInput() {
        return this._zhTw;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#key CcNotification#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/connect_notification#value CcNotification#value}
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
}
