// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcRouteServerProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon-side ASN of the Route Server.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server#amazon_side_asn CcRouteServer#amazon_side_asn}
    */
    readonly amazonSideAsn: number;
    /**
    * Whether to enable persistent routes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server#persist_routes CcRouteServer#persist_routes}
    */
    readonly persistRoutes?: string;
    /**
    * The duration of persistent routes in minutes
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server#persist_routes_duration CcRouteServer#persist_routes_duration}
    */
    readonly persistRoutesDuration?: number;
    /**
    * Whether to enable SNS notifications
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server#sns_notifications_enabled CcRouteServer#sns_notifications_enabled}
    */
    readonly snsNotificationsEnabled?: boolean | cdktn.IResolvable;
    /**
    * An array of key-value pairs to apply to this resource.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server#tags CcRouteServer#tags}
    */
    readonly tags?: CcRouteServer.TagProperty[] | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server awscc_ec2_route_server}
*/
export class CcRouteServer extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_ec2_route_server";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcRouteServer resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcRouteServer to import
    * @param importFromId The id of the existing CcRouteServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcRouteServer to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_ec2_route_server", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server awscc_ec2_route_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcRouteServerProps
    */
    public constructor(scope: Construct, id: string, config: CcRouteServerProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_ec2_route_server',
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
        this._amazonSideAsn = config.amazonSideAsn;
        this._persistRoutes = config.persistRoutes;
        this._persistRoutesDuration = config.persistRoutesDuration;
        this._snsNotificationsEnabled = config.snsNotificationsEnabled;
        this._tags.internalValue = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // amazon_side_asn - computed: false, optional: false, required: true
    private _amazonSideAsn?: number; 
    public get amazonSideAsn() {
        return this.getNumberAttribute('amazon_side_asn');
    }
    public set amazonSideAsn(value: number) {
        this._amazonSideAsn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get amazonSideAsnInput() {
        return this._amazonSideAsn;
    }

    // arn - computed: true, optional: false, required: false
    public get arn() {
        return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // persist_routes - computed: true, optional: true, required: false
    private _persistRoutes?: string; 
    public get persistRoutes() {
        return this.getStringAttribute('persist_routes');
    }
    public set persistRoutes(value: string) {
        this._persistRoutes = value;
    }
    public resetPersistRoutes() {
        this._persistRoutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get persistRoutesInput() {
        return this._persistRoutes;
    }

    // persist_routes_duration - computed: true, optional: true, required: false
    private _persistRoutesDuration?: number; 
    public get persistRoutesDuration() {
        return this.getNumberAttribute('persist_routes_duration');
    }
    public set persistRoutesDuration(value: number) {
        this._persistRoutesDuration = value;
    }
    public resetPersistRoutesDuration() {
        this._persistRoutesDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get persistRoutesDurationInput() {
        return this._persistRoutesDuration;
    }

    // route_server_id - computed: true, optional: false, required: false
    public get routeServerId() {
        return this.getStringAttribute('route_server_id');
    }

    // sns_notifications_enabled - computed: true, optional: true, required: false
    private _snsNotificationsEnabled?: boolean | cdktn.IResolvable; 
    public get snsNotificationsEnabled() {
        return this.getBooleanAttribute('sns_notifications_enabled');
    }
    public set snsNotificationsEnabled(value: boolean | cdktn.IResolvable) {
        this._snsNotificationsEnabled = value;
    }
    public resetSnsNotificationsEnabled() {
        this._snsNotificationsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get snsNotificationsEnabledInput() {
        return this._snsNotificationsEnabled;
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcRouteServer.TagPropertyList(this, "tags", false);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcRouteServer.TagProperty[] | cdktn.IResolvable) {
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
            amazon_side_asn: cdktn.numberToTerraform(this._amazonSideAsn),
            persist_routes: cdktn.stringToTerraform(this._persistRoutes),
            persist_routes_duration: cdktn.numberToTerraform(this._persistRoutesDuration),
            sns_notifications_enabled: cdktn.booleanToTerraform(this._snsNotificationsEnabled),
            tags: cdktn.listMapper(ccRouteServerTagPropertyToTerraform, false)(this._tags.internalValue),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            amazon_side_asn: {
                value: cdktn.numberToHclTerraform(this._amazonSideAsn),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            persist_routes: {
                value: cdktn.stringToHclTerraform(this._persistRoutes),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            persist_routes_duration: {
                value: cdktn.numberToHclTerraform(this._persistRoutesDuration),
                isBlock: false,
                type: "simple",
                storageClassType: "number",
            },
            sns_notifications_enabled: {
                value: cdktn.booleanToHclTerraform(this._snsNotificationsEnabled),
                isBlock: false,
                type: "simple",
                storageClassType: "boolean",
            },
            tags: {
                value: cdktn.listMapperHcl(ccRouteServerTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "list",
                storageClassType: "CcRouteServer.TagPropertyList",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccRouteServerTagPropertyToTerraform(struct?: CcRouteServer.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccRouteServerTagPropertyToHclTerraform(struct?: CcRouteServer.TagProperty | cdktn.IResolvable): any {
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


export namespace CcRouteServer {
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server#key CcRouteServer#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/ec2_route_server#value CcRouteServer#value}
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
