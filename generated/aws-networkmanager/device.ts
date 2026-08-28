// generated from terraform resource schema (awscc provider) — do not edit by hand
// https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';
export interface CcDeviceProps extends cdktn.TerraformMetaArguments {
    /**
    * The Amazon Web Services location of the device, if applicable.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#aws_location CcDevice#aws_location}
    */
    readonly awsLocation?: CcDevice.AWSLocationProperty;
    /**
    * The description of the device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#description CcDevice#description}
    */
    readonly description?: string;
    /**
    * The ID of the global network.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#global_network_id CcDevice#global_network_id}
    */
    readonly globalNetworkId: string;
    /**
    * The site location.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#location CcDevice#location}
    */
    readonly location?: CcDevice.LocationProperty;
    /**
    * The device model
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#model CcDevice#model}
    */
    readonly model?: string;
    /**
    * The device serial number.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#serial_number CcDevice#serial_number}
    */
    readonly serialNumber?: string;
    /**
    * The site ID.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#site_id CcDevice#site_id}
    */
    readonly siteId?: string;
    /**
    * The tags for the device.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#tags CcDevice#tags}
    */
    readonly tags?: CcDevice.TagProperty[] | cdktn.IResolvable;
    /**
    * The device type.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#type CcDevice#type}
    */
    readonly type?: string;
    /**
    * The device vendor.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#vendor CcDevice#vendor}
    */
    readonly vendor?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device awscc_networkmanager_device}
*/
export class CcDevice extends cdktn.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType = "awscc_networkmanager_device";

    // ==============
    // STATIC Methods
    // ==============
    /**
    * Generates CDKTN code for importing a CcDevice resource upon running "cdktn plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CcDevice to import
    * @param importFromId The id of the existing CcDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CcDevice to import is found
    */
    public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "awscc_networkmanager_device", importId: importFromId, provider });
      }

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device awscc_networkmanager_device} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CcDeviceProps
    */
    public constructor(scope: Construct, id: string, config: CcDeviceProps) {
        super(scope, id, {
            terraformResourceType: 'awscc_networkmanager_device',
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
        this._awsLocation.internalValue = config.awsLocation;
        this._description = config.description;
        this._globalNetworkId = config.globalNetworkId;
        this._location.internalValue = config.location;
        this._model = config.model;
        this._serialNumber = config.serialNumber;
        this._siteId = config.siteId;
        this._tags.internalValue = config.tags;
        this._type = config.type;
        this._vendor = config.vendor;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // aws_location - computed: true, optional: true, required: false
    private _awsLocation = new CcDevice.AWSLocationPropertyOutputReference(this, "aws_location");
    public get awsLocation() {
        return this._awsLocation;
    }
    public putAwsLocation(value: CcDevice.AWSLocationProperty) {
        this._awsLocation.internalValue = value;
    }
    public resetAwsLocation() {
        this._awsLocation.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get awsLocationInput() {
        return this._awsLocation.internalValue;
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

    // device_arn - computed: true, optional: false, required: false
    public get deviceArn() {
        return this.getStringAttribute('device_arn');
    }

    // device_id - computed: true, optional: false, required: false
    public get deviceId() {
        return this.getStringAttribute('device_id');
    }

    // global_network_id - computed: false, optional: false, required: true
    private _globalNetworkId?: string; 
    public get globalNetworkId() {
        return this.getStringAttribute('global_network_id');
    }
    public set globalNetworkId(value: string) {
        this._globalNetworkId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get globalNetworkIdInput() {
        return this._globalNetworkId;
    }

    // id - computed: true, optional: false, required: false
    public get id() {
        return this.getStringAttribute('id');
    }

    // location - computed: true, optional: true, required: false
    private _location = new CcDevice.LocationPropertyOutputReference(this, "location");
    public get location() {
        return this._location;
    }
    public putLocation(value: CcDevice.LocationProperty) {
        this._location.internalValue = value;
    }
    public resetLocation() {
        this._location.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
        return this._location.internalValue;
    }

    // model - computed: true, optional: true, required: false
    private _model?: string; 
    public get model() {
        return this.getStringAttribute('model');
    }
    public set model(value: string) {
        this._model = value;
    }
    public resetModel() {
        this._model = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get modelInput() {
        return this._model;
    }

    // serial_number - computed: true, optional: true, required: false
    private _serialNumber?: string; 
    public get serialNumber() {
        return this.getStringAttribute('serial_number');
    }
    public set serialNumber(value: string) {
        this._serialNumber = value;
    }
    public resetSerialNumber() {
        this._serialNumber = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get serialNumberInput() {
        return this._serialNumber;
    }

    // site_id - computed: true, optional: true, required: false
    private _siteId?: string; 
    public get siteId() {
        return this.getStringAttribute('site_id');
    }
    public set siteId(value: string) {
        this._siteId = value;
    }
    public resetSiteId() {
        this._siteId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get siteIdInput() {
        return this._siteId;
    }

    // state - computed: true, optional: false, required: false
    public get state() {
        return this.getStringAttribute('state');
    }

    // tags - computed: true, optional: true, required: false
    private _tags = new CcDevice.TagPropertyList(this, "tags", true);
    public get tags() {
        return this._tags;
    }
    public putTags(value: CcDevice.TagProperty[] | cdktn.IResolvable) {
        this._tags.internalValue = value;
    }
    public resetTags() {
        this._tags.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
        return this._tags.internalValue;
    }

    // type - computed: true, optional: true, required: false
    private _type?: string; 
    public get type() {
        return this.getStringAttribute('type');
    }
    public set type(value: string) {
        this._type = value;
    }
    public resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
        return this._type;
    }

    // vendor - computed: true, optional: true, required: false
    private _vendor?: string; 
    public get vendor() {
        return this.getStringAttribute('vendor');
    }
    public set vendor(value: string) {
        this._vendor = value;
    }
    public resetVendor() {
        this._vendor = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vendorInput() {
        return this._vendor;
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
        return {
            aws_location: ccDeviceAWSLocationPropertyToTerraform(this._awsLocation.internalValue),
            description: cdktn.stringToTerraform(this._description),
            global_network_id: cdktn.stringToTerraform(this._globalNetworkId),
            location: ccDeviceLocationPropertyToTerraform(this._location.internalValue),
            model: cdktn.stringToTerraform(this._model),
            serial_number: cdktn.stringToTerraform(this._serialNumber),
            site_id: cdktn.stringToTerraform(this._siteId),
            tags: cdktn.listMapper(ccDeviceTagPropertyToTerraform, false)(this._tags.internalValue),
            type: cdktn.stringToTerraform(this._type),
            vendor: cdktn.stringToTerraform(this._vendor),
        };
    }

    protected synthesizeHclAttributes(): { [name: string]: any } {
        const attrs = {
            aws_location: {
                value: ccDeviceAWSLocationPropertyToHclTerraform(this._awsLocation.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDevice.AWSLocationProperty",
            },
            description: {
                value: cdktn.stringToHclTerraform(this._description),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            global_network_id: {
                value: cdktn.stringToHclTerraform(this._globalNetworkId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            location: {
                value: ccDeviceLocationPropertyToHclTerraform(this._location.internalValue),
                isBlock: true,
                type: "struct",
                storageClassType: "CcDevice.LocationProperty",
            },
            model: {
                value: cdktn.stringToHclTerraform(this._model),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            serial_number: {
                value: cdktn.stringToHclTerraform(this._serialNumber),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            site_id: {
                value: cdktn.stringToHclTerraform(this._siteId),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            tags: {
                value: cdktn.listMapperHcl(ccDeviceTagPropertyToHclTerraform, false)(this._tags.internalValue),
                isBlock: true,
                type: "set",
                storageClassType: "CcDevice.TagPropertyList",
            },
            type: {
                value: cdktn.stringToHclTerraform(this._type),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
            vendor: {
                value: cdktn.stringToHclTerraform(this._vendor),
                isBlock: false,
                type: "simple",
                storageClassType: "string",
            },
        };

        // remove undefined attributes
        return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
    }
}

export function ccDeviceAWSLocationPropertyToTerraform(struct?: CcDevice.AWSLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        subnet_arn: cdktn.stringToTerraform(struct!.subnetArn),
        zone: cdktn.stringToTerraform(struct!.zone),
    }
}


export function ccDeviceAWSLocationPropertyToHclTerraform(struct?: CcDevice.AWSLocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        subnet_arn: {
            value: cdktn.stringToHclTerraform(struct!.subnetArn),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        zone: {
            value: cdktn.stringToHclTerraform(struct!.zone),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeviceLocationPropertyToTerraform(struct?: CcDevice.LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        address: cdktn.stringToTerraform(struct!.address),
        latitude: cdktn.stringToTerraform(struct!.latitude),
        longitude: cdktn.stringToTerraform(struct!.longitude),
    }
}


export function ccDeviceLocationPropertyToHclTerraform(struct?: CcDevice.LocationProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    const attrs = {
        address: {
            value: cdktn.stringToHclTerraform(struct!.address),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        latitude: {
            value: cdktn.stringToHclTerraform(struct!.latitude),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
        longitude: {
            value: cdktn.stringToHclTerraform(struct!.longitude),
            isBlock: false,
            type: "simple",
            storageClassType: "string",
        },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


export function ccDeviceTagPropertyToTerraform(struct?: CcDevice.TagProperty | cdktn.IResolvable): any {
    if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
    if (cdktn.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
    }
    return {
        key: cdktn.stringToTerraform(struct!.key),
        value: cdktn.stringToTerraform(struct!.value),
    }
}


export function ccDeviceTagPropertyToHclTerraform(struct?: CcDevice.TagProperty | cdktn.IResolvable): any {
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


export namespace CcDevice {
export interface AWSLocationProperty {
    /**
    * The Amazon Resource Name (ARN) of the subnet that the device is located in.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#subnet_arn CcDevice#subnet_arn}
    */
    readonly subnetArn?: string;
    /**
    * The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#zone CcDevice#zone}
    */
    readonly zone?: string;
}
export class AWSLocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): AWSLocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._subnetArn !== undefined) {
            hasAnyValues = true;
            internalValueResult.subnetArn = this._subnetArn;
        }
        if (this._zone !== undefined) {
            hasAnyValues = true;
            internalValueResult.zone = this._zone;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: AWSLocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._subnetArn = undefined;
            this._zone = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._subnetArn = value.subnetArn;
            this._zone = value.zone;
        }
    }

    // subnet_arn - computed: true, optional: true, required: false
    private _subnetArn?: string; 
    public get subnetArn() {
        return this.getStringAttribute('subnet_arn');
    }
    public set subnetArn(value: string) {
        this._subnetArn = value;
    }
    public resetSubnetArn() {
        this._subnetArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetArnInput() {
        return this._subnetArn;
    }

    // zone - computed: true, optional: true, required: false
    private _zone?: string; 
    public get zone() {
        return this.getStringAttribute('zone');
    }
    public set zone(value: string) {
        this._zone = value;
    }
    public resetZone() {
        this._zone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get zoneInput() {
        return this._zone;
    }
}
export interface LocationProperty {
    /**
    * The physical address.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#address CcDevice#address}
    */
    readonly address?: string;
    /**
    * The latitude.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#latitude CcDevice#latitude}
    */
    readonly latitude?: string;
    /**
    * The longitude.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#longitude CcDevice#longitude}
    */
    readonly longitude?: string;
}
export class LocationPropertyOutputReference extends cdktn.ComplexObject {
    private isEmptyObject = false;
    private resolvableValue?: cdktn.IResolvable;

    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
        super(terraformResource, terraformAttribute, false);
    }

    public get internalValue(): LocationProperty | cdktn.IResolvable | undefined {
        if (this.resolvableValue) {
            return this.resolvableValue;
        }
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult: any = {};
        if (this._address !== undefined) {
            hasAnyValues = true;
            internalValueResult.address = this._address;
        }
        if (this._latitude !== undefined) {
            hasAnyValues = true;
            internalValueResult.latitude = this._latitude;
        }
        if (this._longitude !== undefined) {
            hasAnyValues = true;
            internalValueResult.longitude = this._longitude;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }

    public set internalValue(value: LocationProperty | cdktn.IResolvable | undefined) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this.resolvableValue = undefined;
            this._address = undefined;
            this._latitude = undefined;
            this._longitude = undefined;
        }
        else if (cdktn.Tokenization.isResolvable(value)) {
            this.isEmptyObject = false;
            this.resolvableValue = value;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this.resolvableValue = undefined;
            this._address = value.address;
            this._latitude = value.latitude;
            this._longitude = value.longitude;
        }
    }

    // address - computed: true, optional: true, required: false
    private _address?: string; 
    public get address() {
        return this.getStringAttribute('address');
    }
    public set address(value: string) {
        this._address = value;
    }
    public resetAddress() {
        this._address = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get addressInput() {
        return this._address;
    }

    // latitude - computed: true, optional: true, required: false
    private _latitude?: string; 
    public get latitude() {
        return this.getStringAttribute('latitude');
    }
    public set latitude(value: string) {
        this._latitude = value;
    }
    public resetLatitude() {
        this._latitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get latitudeInput() {
        return this._latitude;
    }

    // longitude - computed: true, optional: true, required: false
    private _longitude?: string; 
    public get longitude() {
        return this.getStringAttribute('longitude');
    }
    public set longitude(value: string) {
        this._longitude = value;
    }
    public resetLongitude() {
        this._longitude = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get longitudeInput() {
        return this._longitude;
    }
}
export interface TagProperty {
    /**
    * The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#key CcDevice#key}
    */
    readonly key?: string;
    /**
    * The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/latest/docs/resources/networkmanager_device#value CcDevice#value}
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
