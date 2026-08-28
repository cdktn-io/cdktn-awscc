// Copyright (c) cdktn-io
// SPDX-License-Identifier: MPL-2.0
// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcPortalProps extends cdktn.TerraformMetaArguments {
    /**
    * Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#alarms CcPortal#alarms}
    */
    readonly alarms?: CcPortal.AlarmsProperty;
    /**
    * The email address that sends alarm notifications.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#notification_sender_email CcPortal#notification_sender_email}
    */
    readonly notificationSenderEmail?: string;
    /**
    * The service to use to authenticate users to the portal. Choose from SSO or IAM. You can't change this value after you create a portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#portal_auth_mode CcPortal#portal_auth_mode}
    */
    readonly portalAuthMode?: string;
    /**
    * The AWS administrator's contact email address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#portal_contact_email CcPortal#portal_contact_email}
    */
    readonly portalContactEmail: string;
    /**
    * A description for the portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#portal_description CcPortal#portal_description}
    */
    readonly portalDescription?: string;
    /**
    * A friendly name for the portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#portal_name CcPortal#portal_name}
    */
    readonly portalName: string;
    /**
    * The type of portal
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#portal_type CcPortal#portal_type}
    */
    readonly portalType?: string;
    /**
    * Map to associate detail of configuration related with a PortalType.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#portal_type_configuration CcPortal#portal_type_configuration}
    */
    readonly portalTypeConfiguration?: { [key: string]: CcPortal.PortalTypeEntryProperty } | cdktn.IResolvable;
    /**
    * The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#role_arn CcPortal#role_arn}
    */
    readonly roleArn: string;
    /**
    * A list of key-value pairs that contain metadata for the portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#tags CcPortal#tags}
    */
    readonly tags?: CcPortal.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal awscc_iotsitewise_portal}
*/
export class CcPortal extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_iotsitewise_portal";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcPortal resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcPortal to import
    * @param importFromId The id of the existing CcPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcPortal to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_iotsitewise_portal", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal awscc_iotsitewise_portal} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcPortalProps
    */
    public constructor(scope: Construct, id: string, config: CcPortalProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_iotsitewise_portal',
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
        this._alarms.internalValue = config.alarms;
        this._notificationSenderEmail = config.notificationSenderEmail;
        this._portalAuthMode = config.portalAuthMode;
        this._portalContactEmail = config.portalContactEmail;
        this._portalDescription = config.portalDescription;
        this._portalName = config.portalName;
        this._portalType = config.portalType;
        this._portalTypeConfiguration.internalValue = config.portalTypeConfiguration;
        this._roleArn = config.roleArn;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // alarms - computed: true, optional: true, required: false
    private _alarms = new CcPortal.AlarmsPropertyOutputReference(this, "alarms");
    public get alarms() {
        return this._alarms;
    }
    public putAlarms(value: CcPortal.AlarmsProperty) {
        this._alarms.internalValue = value;
    }
    public resetAlarms() {
        this._alarms.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmsInput() {
        return this._alarms.internalValue;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // notification_sender_email - computed: true, optional: true, required: false
    private _notificationSenderEmail?: string; 
    public get notificationSenderEmail() {
        return this.getStringAttribute('notification_sender_email');
    }
    public set notificationSenderEmail(value: string) {
        this._notificationSenderEmail = value;
    }
    public resetNotificationSenderEmail() {
        this._notificationSenderEmail = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationSenderEmailInput() {
        return this._notificationSenderEmail;
    }

    // portal_arn - computed: true, optional: false, required: false
    public get portalArn() {
        return this.getStringAttribute('portal_arn');
    }

    // portal_auth_mode - computed: true, optional: true, required: false
    private _portalAuthMode?: string; 
    public get portalAuthMode() {
        return this.getStringAttribute('portal_auth_mode');
    }
    public set portalAuthMode(value: string) {
        this._portalAuthMode = value;
    }
    public resetPortalAuthMode() {
        this._portalAuthMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portalAuthModeInput() {
        return this._portalAuthMode;
    }

    // portal_client_id - computed: true, optional: false, required: false
    public get portalClientId() {
        return this.getStringAttribute('portal_client_id');
    }

    // portal_contact_email - computed: false, optional: false, required: true
    private _portalContactEmail?: string; 
    public get portalContactEmail() {
        return this.getStringAttribute('portal_contact_email');
    }
    public set portalContactEmail(value: string) {
        this._portalContactEmail = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portalContactEmailInput() {
        return this._portalContactEmail;
    }

    // portal_description - computed: true, optional: true, required: false
    private _portalDescription?: string; 
    public get portalDescription() {
        return this.getStringAttribute('portal_description');
    }
    public set portalDescription(value: string) {
        this._portalDescription = value;
    }
    public resetPortalDescription() {
        this._portalDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portalDescriptionInput() {
        return this._portalDescription;
    }

    // portal_id - computed: true, optional: false, required: false
    public get portalId() {
        return this.getStringAttribute('portal_id');
    }

    // portal_name - computed: false, optional: false, required: true
    private _portalName?: string; 
    public get portalName() {
        return this.getStringAttribute('portal_name');
    }
    public set portalName(value: string) {
        this._portalName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get portalNameInput() {
        return this._portalName;
    }

    // portal_start_url - computed: true, optional: false, required: false
    public get portalStartUrl() {
        return this.getStringAttribute('portal_start_url');
    }

    // portal_type - computed: true, optional: true, required: false
    private _portalType?: string; 
    public get portalType() {
        return this.getStringAttribute('portal_type');
    }
    public set portalType(value: string) {
        this._portalType = value;
    }
    public resetPortalType() {
        this._portalType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portalTypeInput() {
        return this._portalType;
    }

    // portal_type_configuration - computed: true, optional: true, required: false
    private _portalTypeConfiguration = new CcPortal.PortalTypeEntryPropertyMap(this, "portal_type_configuration");
    public get portalTypeConfiguration() {
        return this._portalTypeConfiguration;
    }
    public putPortalTypeConfiguration(value: { [key: string]: CcPortal.PortalTypeEntryProperty } | cdktn.IResolvable) {
        this._portalTypeConfiguration.internalValue = value;
    }
    public resetPortalTypeConfiguration() {
        this._portalTypeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portalTypeConfigurationInput() {
        return this._portalTypeConfiguration.internalValue;
    }

    // role_arn - computed: false, optional: false, required: true
    private _roleArn?: string; 
    public get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
        return this._roleArn;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcPortal.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcPortal.TagProperty[] | cdktn.IResolvable) {
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
            alarms: ccPortalAlarmsPropertyToTerraform(this._alarms.internalValue),
            notification_sender_email: cdktn.stringToTerraform(this._notificationSenderEmail),
            portal_auth_mode: cdktn.stringToTerraform(this._portalAuthMode),
            portal_contact_email: cdktn.stringToTerraform(this._portalContactEmail),
            portal_description: cdktn.stringToTerraform(this._portalDescription),
            portal_name: cdktn.stringToTerraform(this._portalName),
            portal_type: cdktn.stringToTerraform(this._portalType),
            portal_type_configuration: cdktn.hashMapper(ccPortalPortalTypeEntryPropertyToTerraform)(this._portalTypeConfiguration.internalValue),
            role_arn: cdktn.stringToTerraform(this._roleArn),
            tags: cdktn.listMapper(ccPortalTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            alarms: {
                value: ccPortalAlarmsPropertyToHclTerraform(this._alarms.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcPortal.AlarmsProperty",
            },
            notification_sender_email: {
                value: cdktn.stringToHclTerraform(this._notificationSenderEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            portal_auth_mode: {
                value: cdktn.stringToHclTerraform(this._portalAuthMode),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            portal_contact_email: {
                value: cdktn.stringToHclTerraform(this._portalContactEmail),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            portal_description: {
                value: cdktn.stringToHclTerraform(this._portalDescription),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            portal_name: {
                value: cdktn.stringToHclTerraform(this._portalName),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            portal_type: {
                value: cdktn.stringToHclTerraform(this._portalType),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            portal_type_configuration: {
                value: cdktn.hashMapperHcl(ccPortalPortalTypeEntryPropertyToHclTerraform)(this._portalTypeConfiguration.internalValue),
                isBlock: true,
                type: "map",
                storageClassType: "CcPortal.PortalTypeEntryPropertyMap",
            },
            role_arn: {
                value: cdktn.stringToHclTerraform(this._roleArn),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccPortalTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcPortal.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccPortalAlarmsPropertyToTerraform(struct?: CcPortal.AlarmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        alarm_role_arn: cdktn.stringToTerraform(struct!.alarmRoleArn),
        notification_lambda_arn: cdktn.stringToTerraform(struct!.notificationLambdaArn),
    }
}


export function ccPortalAlarmsPropertyToHclTerraform(struct?: CcPortal.AlarmsProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        alarm_role_arn: {
            value: cdktn.stringToHclTerraform(struct!.alarmRoleArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        notification_lambda_arn: {
            value: cdktn.stringToHclTerraform(struct!.notificationLambdaArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPortalPortalTypeEntryPropertyToTerraform(struct?: CcPortal.PortalTypeEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        portal_tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.portalTools),
    }
}


export function ccPortalPortalTypeEntryPropertyToHclTerraform(struct?: CcPortal.PortalTypeEntryProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        portal_tools: {
            value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.portalTools),
            isBlock: false,
            type: "list",
            storageClassType: "stringList",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccPortalTagPropertyToTerraform(struct?: CcPortal.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccPortalTagPropertyToHclTerraform(struct?: CcPortal.TagProperty | cdktn.IResolvable): any {
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


export namespace CcPortal {
export interface AlarmsProperty {
    /**
    * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#alarm_role_arn CcPortal#alarm_role_arn}
    */
    readonly alarmRoleArn?: string;
    /**
    * The ARN of the AWS Lambda function that manages alarm notifications. For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#notification_lambda_arn CcPortal#notification_lambda_arn}
    */
    readonly notificationLambdaArn?: string;
}
export class AlarmsPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AlarmsProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._alarmRoleArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.alarmRoleArn = this._alarmRoleArn;
        }
        if (this._notificationLambdaArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.notificationLambdaArn = this._notificationLambdaArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AlarmsProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._alarmRoleArn = undefined;
            this._notificationLambdaArn = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._alarmRoleArn = value.alarmRoleArn;
            this._notificationLambdaArn = value.notificationLambdaArn;
        }
    }

    // alarm_role_arn - computed: true, optional: true, required: false
    private _alarmRoleArn?: string; 
    public get alarmRoleArn() {
        return this.getStringAttribute('alarm_role_arn');
    }
    public set alarmRoleArn(value: string) {
        this._alarmRoleArn = value;
    }
    public resetAlarmRoleArn() {
        this._alarmRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get alarmRoleArnInput() {
        return this._alarmRoleArn;
    }

    // notification_lambda_arn - computed: true, optional: true, required: false
    private _notificationLambdaArn?: string; 
    public get notificationLambdaArn() {
        return this.getStringAttribute('notification_lambda_arn');
    }
    public set notificationLambdaArn(value: string) {
        this._notificationLambdaArn = value;
    }
    public resetNotificationLambdaArn() {
        this._notificationLambdaArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get notificationLambdaArnInput() {
        return this._notificationLambdaArn;
    }
}
export interface PortalTypeEntryProperty {
    /**
    * List of enabled Tools for a certain portal.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#portal_tools CcPortal#portal_tools}
    */
    readonly portalTools?: string[];
}
export class PortalTypeEntryPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectKey the key of this item in the map
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
        super(terraformResource, terraformAttribute, false, complexObjectKey);
    }

    public get internalValue(): PortalTypeEntryProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._portalTools !== undefined) {
            hasAnyValues = true;
            internalValueResult.portalTools = this._portalTools;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: PortalTypeEntryProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._portalTools = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._portalTools = value.portalTools;
        }
    }

    // portal_tools - computed: true, optional: true, required: false
    private _portalTools?: string[]; 
    public get portalTools() {
        return this.getListAttribute('portal_tools');
    }
    public set portalTools(value: string[]) {
        this._portalTools = value;
    }
    public resetPortalTools() {
        this._portalTools = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get portalToolsInput() {
        return this._portalTools;
    }
}

export class PortalTypeEntryPropertyMap extends cdktn.ComplexMap {
    public internalValue? : { [key: string]: PortalTypeEntryProperty } | cdktn.IResolvable

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute);
    }

    /**
    * @param key the key of the item to return
    */
    public get(key: string): PortalTypeEntryPropertyOutputReference {
        return new PortalTypeEntryPropertyOutputReference(this.terraformResource, this.terraformAttribute, key);
    }
}
export interface TagProperty {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#key CcPortal#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/iotsitewise_portal#value CcPortal#value}
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
